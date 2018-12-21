import React, { Component } from 'react';
import $ from 'jquery';

const Intro = () => {
    const introSlide = () => {
        $("#introContainer").slideUp("slow");
    }
    return (
        <div id="introContainer" className="intro-container">
            <h1>Welcome to the game - Veshalica</h1>
            <p>Goal of the game is to guess capital cities of Europe</p>
            <button className="btnMy btnMy-intro" onClick={introSlide}>Start the game</button>
        </div>
    );

}

export default Intro;