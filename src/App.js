//npm install gh-pages 
//"homepage":"https://ivanbkovacevic.github.io/vesalica", -ovo u jsonu
//"deploy":"npm run build&&gh-pages -d build",
//npm run deploy
import React, { Component } from 'react';
import './css/vesalica.css';
import Intro from './components/Intro';
import Vesalo from './components/Vesalo';
import Message from './components/Message';
import axios from 'axios';
import removeAccents from 'remove-accents';
import LettersToBeGuessed from './components/LettersToBeGuessed';


class App extends Component {

  state = {
    gameStarted: false,
    worldCityes: [],
    zagRec: '',
    zagRecCountry: '',
    showWord: false,
    zagRecLength: 0,
    zagRecArr: [],
    zagRecArrChecking: [],
    correctLettArr: [],
    abeceda: [
      { id: 0, value: "A", clicked: false }, { id: 1, value: "B", clicked: false }, { id: 2, value: "C", clicked: false }, { id: 3, value: "D", clicked: false },
      { id: 4, value: "E", clicked: false }, { id: 5, value: "F", clicked: false }, { id: 6, value: "G", clicked: false }, { id: 7, value: "H", clicked: false },
      { id: 8, value: "I", clicked: false }, { id: 9, value: "J", clicked: false }, { id: 10, value: "K", clicked: false }, { id: 11, value: "L", clicked: false },
      { id: 12, value: "M", clicked: false }, { id: 13, value: "N", clicked: false }, { id: 14, value: "O", clicked: false }, { id: 15, value: "P", clicked: false },
      { id: 16, value: "Q", clicked: false }, { id: 17, value: "R", clicked: false }, { id: 18, value: "S", clicked: false }, { id: 19, value: "T", clicked: false },
      { id: 20, value: "U", clicked: false }, { id: 21, value: "W", clicked: false }, { id: 22, value: "V", clicked: false }, { id: 23, value: "X", clicked: false },
      { id: 24, value: "Y", clicked: false }, { id: 25, value: "Z", clicked: false }],

    bingo: 0,
    missed: 0,
    letterG: '',
    notMatch: 0,
    message: '',
    btnMsg: 'START',
    status: '',
    hide: 'none',
    remove: '',
  }

  componentDidMount() {
   // https://restcountries.eu/rest/v2/region/europe
   const headers = new Headers();
   headers.append("X-CSCAPI-KEY", "WHRZNmR4QjI3b055QXZ5RGhtU08weW5pajlzZ2hHRWVBOTBOdlQzWg==");
   
   const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
   };
    let { zagRec, worldCityes, zagRecCountry } = this.state;

    axios.get('https://restcountries.com/v3.1/region/europe')//taking the names of capital cityes
      .then((response) => {
        console.log(response)
        for (let i in response.data) {
          let zagonetka = {};
          if (response.data[i].capital !== '') {
            zagonetka.capital = response.data[i].capital;
            zagonetka.country = response.data[i].name
            worldCityes.push(zagonetka);
          }
        }
        this.setState({ zagRec, worldCityes, zagRecCountry });
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  generateWord = () => { // this part creates mistery word and also it creates dashes for every letter
                         // and also it makes couple of arrayes
    let { zagRec, zagRecLength, zagRecArr, correctLettArr, notMatch, zagRecArrChecking,
      gameStarted, btnMsg, abeceda, hide, remove, worldCityes, zagRecCountry } = this.state;

    if (!gameStarted) {
      gameStarted = !gameStarted;
      btnMsg = 'RESET';
      hide = 'none';
      remove = 'none';
      let worldCityesLength = worldCityes.length;
      let zagIndex = Math.floor(Math.random() * worldCityesLength) + 1;
      zagRec = worldCityes[zagIndex].capital[0]; //randomly taking word from object
      zagRecCountry = worldCityes[zagIndex].country; //taking the country name
      zagRecCountry = zagRecCountry.common.toUpperCase();

      zagRec = removeAccents(zagRec); // dealing with special characters

      this.setState({ zagRec, worldCityes, zagRecCountry });

      zagRecLength = zagRec.length;//we need length of word so we can check is it guessed or is game over
         
      zagRec = zagRec.toUpperCase();
      zagRecArr = Array.from(zagRec);//making the array from word so we can manipulate with it
      zagRecArrChecking = [...zagRecArr];//this is array which we use to check are all letters guessed

      for (let c in zagRecArr) { // for loop which checks are some spaces in mistery word. also it pops that out from arrays    
        if (zagRecArrChecking[c] === ' ') {// we need this otherwaythe number ov guessesse will be different from number of letters
            zagRecArrChecking.splice(c, 1);
          zagRecLength--;
          this.setState({ zagRecArrChecking })
        }

        if (zagRecArr[c] === ' ') {//we need this so that we do not have dash on place where is empty space character
          correctLettArr.push(' ');
        } else {
          correctLettArr.push('_');
        }
      }

      this.setState({
        zagRec, zagRecLength, zagRecArr, correctLettArr, notMatch,
        zagRecArrChecking, gameStarted, btnMsg, hide, remove
      });
    } else {
      gameStarted = !gameStarted;
      hide = 'none';

      for (let i in abeceda) {
        abeceda[i].clicked = false;
      }
      this.setState({
        zagRec: '',
        zagRecCountry: '',
        gameStarted,
        showWord: false,
        zagRecLength: 0,
        zagRecArr: [],
        zagRecArrChecking: [],
        correctLettArr: [],
        bingo: 0,
        missed: 0,
        letterG: '',
        atmLettArr: [],
        message: '',
        btnMsg: 'New word',
        status: '',
        abeceda,
        hide
      });
    }

  }

  GuessingLetter = (s, i) => { // player are guessing the word...
    let { letterG, zagRecArr, zagRecArrChecking, zagRec, message, correctLettArr, bingo,
      zagRecLength, showWord, notMatch, missed, abeceda, hide } = this.state;
    abeceda = abeceda.slice();
    zagRecArr = zagRecArr.slice();
    zagRecArrChecking = zagRecArrChecking.slice();
    correctLettArr = correctLettArr.slice(); //array which catches the correct guesses
    hide = '';

    letterG = s;// guessed letter

    letterG = letterG.toUpperCase();
    abeceda[i].clicked = true;
    this.setState({ abeceda, hide });

    for (let w in zagRecArr) { //going trough array and checking are there some correct guesses
      if (zagRecArr[w] === letterG) {
        correctLettArr[w] = letterG;//correctLettArr is used for displaying correct guessed letters 
        message = 'Correct';
        this.setState({ correctLettArr, message });
      }
    }

    for (let ww in zagRecArrChecking) { //here we check are is correct guess and is it win or not
      let double = Number(ww) + 1;// for the word wich have same letters next to each others

      if (zagRecArrChecking[ww] === letterG && zagRecArrChecking[double] === letterG) {
        zagRecArrChecking.splice(ww, 2);
        bingo += 2;
        this.setState({ zagRecArrChecking, bingo });
      }

      if (zagRecArrChecking[ww] === letterG) {
        zagRecArrChecking.splice(ww, 1);  
        bingo++;
        this.setState({ zagRecArrChecking, bingo });
      }
    }

    notMatch = zagRec.includes(letterG);//checking is guesset letter inside of mistery word
    if (!notMatch) {//if is true adding adequate points and writing adecuate message
      message = 'No such letter';
      missed++
      this.setState({ message, missed })
    }

    if (bingo === zagRecLength) { //the mistery word is find
      message = 'Bravo! You fiNd correct word';
      hide = 'none';
      for (let i in abeceda) {
        abeceda[i].clicked = true;
      }
      this.setState({ message, hide, abeceda })
    }

    if (missed === 6) { //every time when is missed letter we give one point to the missed variable
      message = 'You lost the game';
      hide = 'none';
      showWord = true;
      for (let i in abeceda) {
        abeceda[i].clicked = true;
      }
      this.setState({ message, hide, showWord, abeceda })
    }

    this.setState({ letterG });

    if (missed === 6) {
      setTimeout(() => {
        this.setState({ missed: 7 });
      }, 1000)

      setTimeout(() => {
        this.setState({ missed: 8 });
      }, 1500)
    };
  }

  ////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    let { correctLettArr } = this.state;
    let correct = null;
    let abc = null;

    correct = correctLettArr.map((l, i) => {
      return <span className='crtice'>{l}</span>
    })
    abc = (
      this.state.abeceda.map((slo, i) => {
        return (<LettersToBeGuessed isUsed={slo.clicked}
          value={slo.value}
          clicked={() => this.GuessingLetter(slo.value, i)} />
        )
      })
    )

    return (
      <div className="main-container">
        <div className='sub-container'>
          <Intro remove={this.state.remove}
            started={this.state.gameStarted} />
          <div className="row">
            <div className="container-btnLetters">
              {this.state.gameStarted ? <div>{abc}</div> : null}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 ">

              <Message hide={this.state.hide} message={this.state.message} />
              <div className='answerContainer'>
                {this.state.gameStarted ? <div>Capital of  {this.state.zagRecCountry}</div> : null}
                {this.state.showWord ? <div>Mistery word was : {this.state.zagRec}</div> : null}
              </div>
              <button className="btnMy" onClick={this.generateWord}>{this.state.btnMsg}</button>
            </div>
            <div className="col-xs-6 ">
              <Vesalo gameStarted={this.state.gameStarted}
                missed={this.state.missed}
                message={this.state.message}
                bingo={this.state.bingo} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 ">
              <div className="container-crtice"><span className="letters-zagonetka">{correct}</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
