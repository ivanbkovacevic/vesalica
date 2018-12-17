import React, { Component } from 'react';
import $ from 'jquery';

class Intro extends Component {

    introSlide=()=>{
        console.log('yapocni')
            $("#introContainer").slideUp("slow");
    }
    
    render() {       
        return (
            <div id="introContainer" className="intro-container">
                <h1>Dobro došli u igricu - Vešalica</h1>
                 <p>Cilj igre je da pogodite zagonetnu reč</p>
                 <p>U pitanju su gradovi Srbije</p>
                 <button className="btnMy btnMy-intro" onClick={this.introSlide}>Počni sa igrom</button>
            </div>
        );
    }
}

export default Intro;