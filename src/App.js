//npm install gh-pages --save-dev
//"homepage":"https://ivanbkovacevic.github.io/vesalica", -ovo u jsonu
//"deploy":"npm run build&&gh-pages -d build",
//npm run deploy
import React, { Component } from 'react';
import './css/vesalica.css';
import Crtica from './Crtica';
import Vesalo from './Vesalo';
import LettersToBeGuessed from './LettersToBeGuessed';
import { Grid, Col, Row,Button } from 'react-bootstrap';
class App extends Component {

state={
  zagRec:'novi sad',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  zagRecArrChecking:[],
  correctLettArr:[],
  svaSlova:[{id:0,value:"A",clicked:false},{id:1,value:"B",clicked:false},{id:2,value:"C",clicked:false},{id:3,value:"D",clicked:false},
  {id:4,value:"E",clicked:false},{id:5,value:"F",clicked:false},{id:6,value:"G",clicked:false},{id:7,value:"H",clicked:false},
  {id:8,value:"I",clicked:false},{id:9,value:"J",clicked:false},{id:10,value:"K",clicked:false},{id:11,value:"L",clicked:false},
  {id:12,value:"M",clicked:false},{id:13,value:"N",clicked:false},{id:14,value:"O",clicked:false},{id:15,value:"P",clicked:false},
  {id:16,value:"Q",clicked:false},{id:17,value:"R",clicked:false},{id:18,value:"S",clicked:false},{id:19,value:"T",clicked:false},
  {id:20,value:"U",clicked:false},{id:21,value:"V",clicked:false},{id:22,value:"W",clicked:false},{id:23,value:"X",clicked:false},
  {id:24,value:"Y",clicked:false},{id:25,value:"Z",clicked:false},{id:26,value:"Ć",clicked:false},{id:27,value:"Č",clicked:false},
  {id:28,value:"Đ",clicked:false},{id:29,value:"Š",clicked:false},{id:30,value:"Ž",clicked:false},{id:31,value:"DŽ",clicked:false},
  {id:32,value:"LJ",clicked:false},{id:33,value:"NJ",clicked:false}],

  
  bingo:0,
  missed:0,
  letterG:'',
  atmLettArr:['x'],
  notMatch:0,
  message:'',
  status:'',
  clicked:''
}

generateWord=()=>{ // kreira rec...i kreira crtice za slova i pravi nekoliko arraya
  let {zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,zagRecArrChecking}=this.state;
   zagRecLength= zagRec.length;//du\ina nam treba da bismo proveravali da li je doslo do pobede ili poraza kao i za crtanje
   zagRec=zagRec.toUpperCase();
   zagRecArr=  Array.from(zagRec);// pravljenje array od reci jer treba manipulisati sa tim array
   zagRecArrChecking=[...zagRecArr];//array koji sluzi za proveru da li su sva slova pogodjena tj.  registruje da li su sva slova(i duplikati) upisani
  //  abeceda=abeceda.slice(); 
  //  abeceda=[..."a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","nj"];
   for(let c in zagRecArr){ // loop koji proverava da li ima razmaka tj da li ima dve ili vise reci i izbacuje taj elemenat i smanjuje duzinu
     if(zagRecArr[c]===' '){// ovo mora jer inace ubacio bi ubacio crticu i na prayno mesto
      correctLettArr.push(' ');
      zagRecArrChecking.splice(c,1);
      zagRecLength--;
     }else{
      correctLettArr.push('_')
     }
    
   }
   this.setState({zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,zagRecArrChecking});
}

showWord=()=>{ //prikazuje zagonetnu rec...to je kada igrac ne moze da pronadje rec
  let {showWord}=this.state;
  showWord= true;
   this.setState({showWord});
}


GuessingLetter=(s,i)=>{ // igrac pogadja rec...u input upisuje slova i submituje ih  
  // e.preventDefault();
  let {letterG,atmLettArr,zagRecArr,zagRecArrChecking,message,correctLettArr,bingo,zagRecLength,notMatch,missed,status,svaSlova}=this.state;
  svaSlova=svaSlova.slice();
  atmLettArr=atmLettArr.slice();//niz koji ispisuje slova koje je igrac sve pokusao
  zagRecArr=zagRecArr.slice();
  zagRecArrChecking=zagRecArrChecking.slice();
  correctLettArr=correctLettArr.slice();//array koji hvata tacna slova  tj pogotke
 
    letterG = s;//hvatanje slova iz inputa
    letterG=letterG.toUpperCase();
    svaSlova[i].clicked=true;
    this.setState({svaSlova});
    
    
    for(let q in atmLettArr){///////////ovo treba da se sredi/////////////
       if(letterG === atmLettArr[q]){
        message='Vec ste probali ovo slovo';
        this.setState({message});
       }else{
        atmLettArr.push(letterG);
        this.setState({atmLettArr});
       }
    }
   

    for(let w in zagRecArr ){ //prolazenje kroz arr reci i cekiranje da li se neki elemenat arr poklapa sa guessovanim slovom
      if(zagRecArr[w]===letterG){
        correctLettArr[w]=letterG;//correctLettArr sluzi za ispisivanje pogodjenih slova....mo\da je moglo da se nayove i displayedLettArr
        message='Pogodili ste slovo';
        this.setState({correctLettArr,message});
      } 
  }

  for(let ww in zagRecArrChecking ){ //cekiranje pogodatak i dobijanje da li pobeda ili ne
    if(zagRecArrChecking[ww]===letterG){
      zagRecArrChecking.splice(ww,1); // zagRecArrChecking sluzi za proveru da li je pronadjena zagonetna rec...taj array se smanjuje...izbacuju se pogodjena slova i dodaje se po poen u bingo 
      bingo++;
      this.setState({zagRecArrChecking,bingo});
    } 
}

  this.checkSlovo=(slovo)=>{ // funkcija koja vraca true ili false u zavisnsoti od uslova
    return slovo !== letterG;
   }

   notMatch=zagRecArr.every(this.checkSlovo);//primenjivanje gornje funkcije na svaki elemenat u nizu
   
     if(notMatch){//ako je true dodavanje poena u missed  i ispisavanje poruke
       message='Nema tog slova u reci !';
       missed++
       this.setState({message,missed})
     }

      if(bingo===zagRecLength){ //pronaslo se tacno resenje 
        message='BRAVO! Nasli ste tacnu rec.';
        status='-win';
        this.setState({message,status})
      }

      if(missed===6 ){ //missed se dobija kada slovo nije matchovano
        message='IZGUBILI STE PARTIJU';
        status='-loss';
        this.setState({message,status})
      }

    this.setState({letterG})
  //  e.target.reset();
}

newGame=()=>{
  
  this.setState({
  zagRec:'novi sad',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  zagRecArrChecking:[],
  correctLettArr:[],
  bingo:0,
  missed:0,
  letterG:'',
  atmLettArr:[],
  message:'',
  status:'',
  svaSlova:[{id:0,value:"A",clicked:false},{id:1,value:"B",clicked:false},{id:2,value:"C",clicked:false},{id:3,value:"D",clicked:false},
  {id:4,value:"E",clicked:false},{id:5,value:"F",clicked:false},{id:6,value:"G",clicked:false},{id:7,value:"H",clicked:false},
  {id:8,value:"I",clicked:false},{id:9,value:"J",clicked:false},{id:10,value:"K",clicked:false},{id:11,value:"L",clicked:false},
  {id:12,value:"M",clicked:false},{id:13,value:"N",clicked:false},{id:14,value:"O",clicked:false},{id:15,value:"P",clicked:false},
  {id:16,value:"Q",clicked:false},{id:17,value:"R",clicked:false},{id:18,value:"S",clicked:false},{id:19,value:"T",clicked:false},
  {id:20,value:"U",clicked:false},{id:21,value:"V",clicked:false},{id:22,value:"W",clicked:false},{id:23,value:"X",clicked:false},
  {id:24,value:"Y",clicked:false},{id:25,value:"Z",clicked:false},{id:26,value:"Ć",clicked:false},{id:27,value:"Č",clicked:false},
  {id:28,value:"Đ",clicked:false},{id:29,value:"Š",clicked:false},{id:30,value:"Ž",clicked:false},{id:31,value:"DŽ",clicked:false},
  {id:32,value:"LJ",clicked:false},{id:33,value:"NJ",clicked:false}],
});

}

  render() {
    let {status,correctLettArr,abceda}=this.state;
  
   let correct=null;
   let guessedLett=null;
   let abc=null;
   
     guessedLett = this.state.atmLettArr.map((gl,i)=>{
      return <span className='crtice'> {gl} ,</span>
    })

    correct=correctLettArr.map((l,i)=>{
      return <span className='crtice'>{l}</span>
    })

    abc=(
      this.state.svaSlova.map((slovo,i)=>{
      return (<LettersToBeGuessed isUsed={slovo.clicked} value={slovo.value} clicked={()=>this.GuessingLetter(slovo.value,i)}/>
        )
    })
  )
    return (
      <Grid >
        <Row>
          <Col xs={4}><button className="btnmoj" onClick={this.generateWord}>START</button></Col>
          <Col xs={4}> <button className="btnmoj" onClick={this.showWord}>PRIKAŽI REČ</button></Col>
          <Col xs={4}>  <button className="btnmoj" onClick={this.newGame}>NOVA REČ</button></Col>
        </Row>

        <Row>
          <div className='zag-rec-container'>
              {this.state.showWord ? <div className="letters">{this.state.zagRec}</div> : null} 
              <Col xs={12}><span className="letters-zagonetka">{correct}</span></Col>
          </div>
  
        </Row>
    {/* <Row>
      <Col xs={12}> 
      <form onSubmit={this.GuessingLetter}>
      <input type='text' maxLength="1" size="1" ref="letter" ></input>
      <button className="btnmoj" type='submit'>Da li ima ovog slova?</button>
      </form>
      </Col>
   
    </Row> */}
    <Row>
    <Col xs={12}> 
    {/* <div> <span className="letters">Pokušana slova:  {guessedLett}</span></div>  */}
    <div>{abc}</div>
    </Col>
     
    </Row>
    <Row>
    <Col xs={12}> 
       <div className={`message${status}`}>{this.state.message}</div>
    </Col>
  
    </Row>
    <Row>
      <Vesalo missed={this.state.missed}/>
    </Row>

      </Grid>
    );
  }
}

export default App;
