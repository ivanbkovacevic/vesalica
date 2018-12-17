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
import LettersToBeGuessed from './components/LettersToBeGuessed';
class App extends Component {

state={
  gameStarted:false,
  gradoviSrbije:{
    1:'ALEKSINAC',2:'BEOGRAD',3:'KLADOVO',4:'NOVI SAD',5:'ZRENjANIN',6:"PANČEVO",7:"VRŠAC",8:"ČAČAK",9:"KRAGUJEVAC",10:"NIŠ",
    11:"KRUŠEVAC",12:"SUBOTICA",13:"BEČEJ",14:"KIKINDA",15:"KRALjEVO",16:"VALjEVO",17:"SMEDEREVO",18:"PARAĆIN",19:"LESKOVAC",20:"APATIN"
  },
  zagRec:'',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  zagRecArrChecking:[],
  correctLettArr:[],
  azbuka:[
  {id:0,value:"A",clicked:false},{id:1,value:"B",clicked:false},{id:2,value:"C",clicked:false},{id:3,value:"D",clicked:false},
  {id:4,value:"E",clicked:false},{id:5,value:"F",clicked:false},{id:6,value:"G",clicked:false},{id:7,value:"H",clicked:false},
  {id:8,value:"I",clicked:false},{id:9,value:"J",clicked:false},{id:10,value:"K",clicked:false},{id:11,value:"L",clicked:false},
  {id:12,value:"M",clicked:false},{id:13,value:"N",clicked:false},{id:14,value:"O",clicked:false},{id:15,value:"P",clicked:false},
  {id:16,value:"R",clicked:false},{id:17,value:"S",clicked:false},{id:18,value:"T",clicked:false},{id:19,value:"U",clicked:false},
  {id:20,value:"V",clicked:false},{id:21,value:"Ć",clicked:false},{id:22,value:"Č",clicked:false},{id:23,value:"Đ",clicked:false},
  {id:24,value:"DŽ",clicked:false},{id:25,value:"LJ",clicked:false},{id:26,value:"NJ",clicked:false},{id:27,value:"Z",clicked:false},
  {id:28,value:"Ž",clicked:false},{id:29,value:"Š",clicked:false}],
  bingo:0,
  missed:0,
  letterG:'',
  notMatch:0,
  message:'',
  btnMsg:'START',
  status:'',
  hide:'none',
  remove:'',
  gradoviFirebase:[],
  dataReady:false
  
}

generateWord=()=>{ // kreira rec...i kreira crtice za slova i pravi nekoliko arraya
  let {zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,zagRecArrChecking,
       gradoviSrbije,gameStarted,btnMsg,azbuka,hide,remove}=this.state;
 
  if(!gameStarted){
    gameStarted=!gameStarted;
    btnMsg='RESETUJ';
    hide='none';
    remove='none';
    let gradoviLength=Object.keys(gradoviSrbije).length;
    console.log(gradoviLength);
    console.log(gradoviSrbije);
    let zagIndex= Math.floor(Math.random() * gradoviLength) + 1;
    zagRec=gradoviSrbije[zagIndex]; //nasumično uzimamo gradove iz objekta
    console.log(zagRec);
    zagRecLength= zagRec.length;//dužina nam treba da bismo proveravali da li je doslo do pobede ili poraza kao i za crtanje
    console.log( zagRecLength);
    zagRec=zagRec.toUpperCase();
    zagRecArr = Array.from(zagRec);// pravljenje array od reci jer treba manipulisati sa tim array
    zagRecArrChecking=[...zagRecArr];//array koji sluzi za proveru da li su sva slova pogodjena tj.  registruje da li su sva slova(i duplikati) upisani
  
    let Lj= zagRec.includes("LJ")
    let Nj= zagRec.includes('NJ');
    let Dž= zagRec.includes('DŽ');
    let LjIndex=zagRec.indexOf("LJ")
    let NjIndex=zagRec.indexOf("NJ")
    let DžIndex=zagRec.indexOf("DŽ")
    for(let c in zagRecArr){ // loop koji proverava da li ima razmaka tj da li ima dve ili vise reci i izbacuje taj elemenat i smanjuje duzinu
     
      if(zagRecArr[c]===' '){// ovo mora jer inace ubacio bi ubacio crticu i na prazno mesto
       correctLettArr.push(' ');
       zagRecArrChecking.splice(c,1);
       zagRecLength--;
      
      }else{
       correctLettArr.push('_')
      }
    }

    if(Lj){// specijalni slucajevi gde se slova pisu sa dva karaktera
        correctLettArr.splice(LjIndex,1);
        zagRecArr[LjIndex]="LJ";
        zagRecArr.splice(LjIndex+1,1);
        zagRecArrChecking=[...zagRecArr];
        zagRecLength--;   
        console.log('iybaceno LJ') 
        console.log(correctLettArr) 
    }
    if(Nj){
      correctLettArr.splice(NjIndex,1);
      zagRecArr[NjIndex]="NJ";
      zagRecArr.splice(NjIndex+1,1);
      zagRecArrChecking=[...zagRecArr];
      zagRecLength--;   
      console.log('iybaceno NJ') 
      console.log(correctLettArr) 
  }
  if(Dž){
    correctLettArr.splice(DžIndex,1);
    zagRecArr[DžIndex]="DŽ";
    zagRecArr.splice(DžIndex+1,1);
    zagRecArrChecking=[...zagRecArr];
    zagRecLength--;   
    console.log('iybaceno DŽ') 
    console.log(correctLettArr) 
}

    this.setState({zagRec,zagRecLength,zagRecArr,correctLettArr,notMatch,
          zagRecArrChecking,gameStarted,btnMsg,hide,remove});
  }else{
    console.log('startovano');
    gameStarted=!gameStarted;
    hide='none';
   
    for(let i in azbuka){
        azbuka[i].clicked=false;
    }
    this.setState({
      zagRec:'',
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
      btnMsg:'NOVA REČ',
      status:'',
       azbuka,hide
    });
  }
  
}


GuessingLetter=(s,i)=>{ // igrac pogadja rec...
  let {letterG,zagRecArr,zagRecArrChecking,zagRec,message,correctLettArr,bingo,
       zagRecLength,showWord,notMatch,missed,azbuka,hide}=this.state;
  azbuka=azbuka.slice();
  zagRecArr=zagRecArr.slice();
  zagRecArrChecking=zagRecArrChecking.slice();
  correctLettArr=correctLettArr.slice();//array koji hvata tacna slova  tj pogotke
  hide='';
 
    letterG = s;// hvatanje slova kliknutog slova
    console.log(s);
    letterG=letterG.toUpperCase();
    azbuka[i].clicked=true;
    this.setState({azbuka,hide});

    for(let w in zagRecArr ){ //prolazenje kroz arr reci i cekiranje da li se neki elemenat arr poklapa sa guessovanim slovom
      if(zagRecArr[w]===letterG){
        correctLettArr[w]=letterG;//correctLettArr sluzi za ispisivanje pogodjenih slova....mozda je moglo da se nazove i displayedLettArr
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

  this.checkSlovo=(slovo)=>{ // funkcija koja vraca true ili false u zavisnoSti od uslova
    return slovo !== letterG;
   }

   notMatch=zagRecArr.every(this.checkSlovo);//primenjivanje gornje funkcije na svaki elemenat u nizu
     if(notMatch){//ako je true dodavanje poena u missed  i ispisavanje poruke
       message='Nema tog slova';
       missed++
       this.setState({message,missed})
     }
      if(bingo===zagRecLength){ //pronaslo se tacno resenje 
        message='Bravo ! Našli ste tačnu reč';
        hide='none';
        this.setState({message,hide})
      }

      if(missed===6 ){ //missed se dobija kada slovo nije matchovano
        message='Izgubili ste partiju';
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
      this.state.azbuka.map((slo,i)=>{
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
                   {this.state.showWord ? <div>Zagonetna reč je bila : {this.state.zagRec}</div> : null}
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
