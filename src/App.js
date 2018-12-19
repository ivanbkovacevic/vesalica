//npm install gh-pages 
//"homepage":"https://ivanbkovacevic.github.io/vesalica", -ovo u jsonu
//"deploy":"npm run build&&gh-pages -d build",
//npm run deploy
import React, { Component } from 'react';
import './css/vesalica.css';
import $ from 'jquery';
import Intro from './components/Intro';
import Vesalo from './components/Vesalo';
import Message from './components/Message';
import axios from 'axios';
import removeAccents from 'remove-accents';
import LettersToBeGuessed from './components/LettersToBeGuessed';
class App extends Component {

state={
  gameStarted:false,
  worldCityes:[],
  zagRec:'',
  zagRecCountry:'',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  zagRecArrChecking:[],
  correctLettArr:[],
   abeceda:[
  {id:0,value:"A",clicked:false},{id:1,value:"B",clicked:false},{id:2,value:"C",clicked:false},{id:3,value:"D",clicked:false},
  {id:4,value:"E",clicked:false},{id:5,value:"F",clicked:false},{id:6,value:"G",clicked:false},{id:7,value:"H",clicked:false},
  {id:8,value:"I",clicked:false},{id:9,value:"J",clicked:false},{id:10,value:"K",clicked:false},{id:11,value:"L",clicked:false},
  {id:12,value:"M",clicked:false},{id:13,value:"N",clicked:false},{id:14,value:"O",clicked:false},{id:15,value:"P",clicked:false},
  {id:16,value:"Q",clicked:false},{id:17,value:"R",clicked:false},{id:18,value:"S",clicked:false},{id:19,value:"T",clicked:false},
  {id:20,value:"U",clicked:false},{id:21,value:"W",clicked:false},{id:22,value:"V",clicked:false},{id:23,value:"X",clicked:false},
  {id:24,value:"Y",clicked:false},{id:25,value:"Z",clicked:false}],

  bingo:0,
  missed:0,
  letterG:'',
  notMatch:0,
  message:'',
  btnMsg:'START',
  status:'',
  hide:'none',
  remove:'',
}

componentDidMount(){
  let {zagRec,worldCityes,zagRecCountry}=this.state;
  axios.get('https://restcountries.eu/rest/v2/region/europe')
  .then( (response)=> { 
    for(let i in response.data){
      let zagonetka={};
        if(response.data[i].capital !==''){
          zagonetka.capital=response.data[i].capital;
          zagonetka.country=response.data[i].name
          worldCityes.push(zagonetka);
        }  
    }
  
    this.setState({zagRec,worldCityes,zagRecCountry});
   
  })
  .catch(function (error) {
    console.log(error);
  });
 
}

generateWord=()=>{ // kreira rec...i kreira crtice za slova i pravi nekoliko arraya
  let {zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,zagRecArrChecking,
  gameStarted,btnMsg,abeceda,hide,remove,worldCityes,zagRecCountry}=this.state;
 
  if(!gameStarted){
    gameStarted=!gameStarted;
    btnMsg='RESET';
    hide='none';
    remove='none';
    let worldCityesLength=worldCityes.length;

    let zagIndex= Math.floor(Math.random()*worldCityesLength)+1;
    zagRec=worldCityes[zagIndex].capital; //nasumično uzimamo gradove iz objekta
    zagRecCountry=worldCityes[zagIndex].country; //nasumično uzimamo gradove iz objekta
      zagRecCountry=zagRecCountry.toUpperCase();

    zagRec = removeAccents(zagRec);// sredjivanje specijalnih karaktera
 
    console.log(zagRec+' REC'); // AAAAAA
    this.setState({zagRec,worldCityes,zagRecCountry});
  
    zagRecLength= zagRec.length;//dužina nam treba da bismo proveravali da li je doslo do pobede ili poraza kao i za crtanje
    zagRec=zagRec.toUpperCase();
    zagRecArr = Array.from(zagRec);// pravljenje array od reci jer treba manipulisati sa tim array
    zagRecArrChecking=[...zagRecArr];//array koji sluzi za proveru da li su sva slova pogodjena tj.  registruje da li su sva slova(i duplikati) upisani
  
    for(let c in zagRecArr){ // loop koji proverava da li ima razmaka tj da li ima dve ili vise reci i izbacuje taj elemenat i smanjuje duzinu    
      if(zagRecArrChecking[c]===' '){// ovo mora da bi broj pogodatak za pobedu odgovarao broju slova u reci
       zagRecArrChecking.splice(c,1);
       zagRecLength--;
       this.setState({zagRecArrChecking})
      }

      if(zagRecArr[c]===' '){// ovo mora jer inace ubacio bi ubacio crticu i na prazno mesto
        correctLettArr.push(' ');
      }else{
        correctLettArr.push('_');
      }
    }

    this.setState({zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,
          zagRecArrChecking,gameStarted,btnMsg,hide,remove});
  }else{
    console.log('startovano');
    gameStarted=!gameStarted;
    hide='none';
   
    for(let i in abeceda){
        abeceda[i].clicked=false;
    }
    this.setState({
      zagRec:'',
      zagRecCountry:'',
      gameStarted,
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
      btnMsg:'New word',
      status:'',
      abeceda,
       hide
    });
  }
  
}


GuessingLetter=(s,i)=>{ // igrac pogadja rec...
  let {letterG,zagRecArr,zagRecArrChecking,zagRec,message,correctLettArr,bingo,
       zagRecLength,showWord,notMatch,missed,abeceda,hide}=this.state;
      abeceda = abeceda.slice();
      zagRecArr = zagRecArr.slice();
      zagRecArrChecking = zagRecArrChecking.slice();
      correctLettArr = correctLettArr.slice(); //array koji hvata tacna slova  tj pogotke
      hide = '';
     
    letterG = s;// hvatanje slova kliknutog slova
    console.log(s);
    
    letterG=letterG.toUpperCase();
    abeceda[i].clicked=true;
    this.setState({abeceda,hide});

    for(let w in zagRecArr ){ //prolazenje kroz arr reci i cekiranje da li se neki elemenat arr poklapa sa guessovanim slovom
      if(zagRecArr[w]===letterG){
        correctLettArr[w]=letterG;//correctLettArr sluzi za ispisivanje pogodjenih slova....mozda je moglo da se nazove i displayedLettArr
        message='Correct';
        this.setState({correctLettArr,message});
      }    
  }

  for(let ww in zagRecArrChecking ){ //cekiranje pogodatak i dobijanje da li pobeda ili ne
    let double=Number(ww)+1;

    if(zagRecArrChecking[ww]===letterG && zagRecArrChecking[double]===letterG){
      zagRecArrChecking.splice(ww,2);
      bingo+=2;
      this.setState({zagRecArrChecking,bingo});
      console.log('usao')
    }
  
    if(zagRecArrChecking[ww]===letterG){
      zagRecArrChecking.splice(ww,1); // zagRecArrChecking sluzi za proveru da li je pronadjena zagonetna rec...taj array se smanjuje...izbacuju se pogodjena slova i dodaje se po poen u bingo 
      bingo++;
      this.setState({zagRecArrChecking,bingo});
    }
}

   notMatch=zagRec.includes(letterG);//primenjivanje gornje funkcije na svaki elemenat u nizu
     if(!notMatch){//ako je true dodavanje poena u missed  i ispisavanje poruke
       message='No such letter';
       missed++
       this.setState({message,missed})
     }

      if(bingo===zagRecLength){ //pronaslo se tacno resenje 
        message='Bravo! You fiNd correct word';
        hide='none';
        this.setState({message,hide})
      }

      if(missed===6 ){ //missed se dobija kada slovo nije matchovano
        message='You lost the game';
        hide='none';
        showWord=true;
        this.setState({message,hide,showWord})
      }

    this.setState({letterG});

    if(missed==6){
      setTimeout(()=>{
        this.setState({missed:7});
      },1000)
          }
}

////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    let {status,correctLettArr}=this.state;
   let correct=null;
   let correctUnder=null;
   let abc=null;
   
    correct=correctLettArr.map((l,i)=>{
      return <span className='crtice'>{l}</span>
    })

    correctUnder=correctLettArr.map((l,i)=>{
      return <span className='under'>{l===" " ? " " : "_"}</span>
    })

    abc=(
      this.state.abeceda.map((slo,i)=>{
      return (<LettersToBeGuessed isUsed={slo.clicked}
        value={slo.value} 
        clicked={()=>this.GuessingLetter(slo.value,i)}/>
        )
    })
  )

    return (
        <div className="main-container">
            <Intro remove={this.state.remove} 
              started={this.state.gameStarted} />
            <div className="row">
            <div className="container-btnLetters">
             { this.state.gameStarted ?   <div>{abc}</div> : null }
          </div>
            </div>
        <div className="row">
           <div className="col-xs-6 ">
         
          <Message hide={this.state.hide} message={this.state.message} />
                  <div className='answerContainer'>
                   {this.state.gameStarted ?<div>Capital of  {this.state.zagRecCountry}</div>:null} 
                   {this.state.showWord ? <div>Mistery word was : {this.state.zagRec}</div> : null}
                  </div>
            <div className="container-crtice"><span className="letters-zagonetka">{correct}</span></div>
            <div className="container-crtice under-container">{correctUnder}</div>
           </div>
           <div className="col-xs-6 ">
             <Vesalo gameStarted={this.state.gameStarted} 
             missed={this.state.missed}
             message={this.state.message}/> 
             
             <button className="btnMy" onClick={this.generateWord}>{this.state.btnMsg}
            </button>    
           </div>
        </div>
      </div>      
    );
  }
}

export default App;
