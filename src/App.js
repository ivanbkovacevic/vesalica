import React, { Component } from 'react';
import './App.css';
import Crtica from './Crtica'
class App extends Component {

state={
  zagRec:'burek',
  showWord:false,
  zagRecLength:0,
  zagRecArr:[],
  letterG:''
}

generateWord=()=>{
  let {zagRec,zagRecLength,zagRecArr}=this.state;
   zagRecLength= zagRec.length;
   zagRecArr= Array.from(zagRec);

   this.setState({zagRec,zagRecLength,zagRecArr});
}

showWord=()=>{
  let {showWord}=this.state;
  showWord= true;
   this.setState({showWord});
}

GuessingLetter=(e)=>{
  e.preventDefault();
 
let letterG = this.refs.letter.value;
console.log(letterG);
this.setState({letterG})

}
  render() {
   let crtice=null;
      crtice =this.state.zagRecArr.map((slovo,i)=>{
       return <Crtica o={slovo}/>
     })

    return (
      <div className="App">
      TEST VESALICA
      <button onClick={this.generateWord}>izaberi rec</button>
      <button onClick={this.showWord}>prikazi rec</button>
      <div>{this.state.zagRec}</div>
      <div>{this.state.zagRecLength}</div>
      {this.state.showWord ? <div>{this.state.zagRec}</div> : null} 
      {crtice}

      <form onSubmit={this.GuessingLetter}>
      <input type='text' placeholder='pogodi slovo' ref="letter"></input>
      <button type='submit'>da li ima ovog slova</button>
      </form>
      {this.state.letterG}
      </div>
    );
  }
}

export default App;
