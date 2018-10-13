import React, { Component } from 'react';
import './css/vesalica.css';
import Crtica from './Crtica';
import Vesalo from './Vesalo';
import { Grid, Col, Row,Button } from 'react-bootstrap';
class App extends Component {

state={
  zagRec:'avatar',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  correctLettArr:[],
  bingo:0,
  missed:0,
  letterG:'',
  atmLettArr:[],
  notMatch:0,
  message:''
}

generateWord=()=>{ // kreira rec...i kreira crtice za slova 
  let {zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch}=this.state;
   zagRecLength= zagRec.length;
   zagRecArr= Array.from(zagRec);
   for(let c in zagRecArr){
     correctLettArr.push('_ ')
   }
   this.setState({zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch});
}

showWord=()=>{ //prikazuje zagonetnu rec...to je kada igrac ne moze da pronadje rec
  let {showWord}=this.state;
  showWord= true;
   this.setState({showWord});
}


GuessingLetter=(e)=>{ // igrac pogadja rec...u input upisuje slova i submituje ih  
  //...ovde treba da se cekira da li ima slova u zagReci kao i ubacivati pokusana slova u neki array koji ce ih prikazivati 
   e.preventDefault();
  let {letterG,atmLettArr,zagRecArr,message,correctLettArr,bingo,zagRecLength,notMatch,zagRec}=this.state;

  atmLettArr=atmLettArr.slice();
  zagRecArr=zagRecArr.slice();
  correctLettArr=correctLettArr.slice();
    letterG = this.refs.letter.value;
    atmLettArr.push(letterG);

    for(let w in zagRecArr ){ //prolazenje kroz arr reci i cekiranje da li se neki elemenat arr poklapa sa guessovanim slovom
      if(zagRecArr[w]===letterG){
        correctLettArr[w]=letterG;
        bingo++;
        this.setState({correctLettArr,bingo});
        }else{
        notMatch++;
        message='nema tog slova u reci';
        this.setState({message,notMatch});
        }   
  }

      if(bingo===zagRecLength){ //pronaslo se tacno resenje
        message='BRAVO! Nasli ste tacnu rec.';
        this.setState({message})
      }
      if(atmLettArr.length-bingo>4 ){ //ako je broj pokusaja veci od pogodaka i ako je broj pokusaja veci od 5
        message='IZGUBILI STE PARTIJU';
        this.setState({message})
      }
    this.setState({letterG,atmLettArr})
    e.target.reset();
}

newGame=()=>{
  let{zagRec,zagRecLength,zagRecArr,correctLettArr,showWord,bingo,letterG,atmLettArr,message}=this.state;
  this.setState({
  zagRec:'avatar',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  correctLettArr:[],
  bingo:0,
  letterG:'',
  atmLettArr:[],
  message:''
});

}

  render() {
    let {letterG,atmLettArr,zagRecArr,message,correctLettArr}=this.state;
  
   let correct=null;
   let guessedLett=null;
   
     guessedLett = this.state.atmLettArr.map((gl,i)=>{
      return <span> {gl} ,</span>
    })

    correct=correctLettArr.map((l,i)=>{
      return <span>{l}</span>
    })

    return (
      <Grid >
        <Row>
        <div>
          <button className="btnmoj" onClick={this.generateWord}>izaberi rec</button>
          <button className="btnmoj" onClick={this.showWord}>prikazi rec</button>
          <button className="btnmoj" onClick={this.newGame}>nova igra</button>
          
        </div>
        </Row>
        <Row>
          {this.state.showWord ? <div className="letters">{this.state.zagRec}</div> : null} 
          <span className="letters">{correct}</span>
        </Row>
    <Row>
    <form onSubmit={this.GuessingLetter}>
      <input type='text' placeholder='pogodi slovo' ref="letter" ></input>
      <button className="btnmoj" type='submit'>Da li ima ovog slova?</button>
      </form>
    </Row>
    <Row>
      <span className="letters">Pokušana slova:  {guessedLett}</span>
       <br/>
    </Row>
    <Row>
    <span className="letters">{this.state.message}</span>
    </Row>
    <Row>
      <Vesalo />
    </Row>

      </Grid>
    );
  }
}

export default App;
