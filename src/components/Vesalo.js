import React, { Component } from 'react';
import '../css/vesalica.css';
import Canvas from './Canvas';

const Vesalo = (props) => {

    let miss1 = props.missed;
    let gameStarted = props.gameStarted;
    let bingo = props.bingo;
    return (
        <Canvas message={props.message}
            gameStarted={gameStarted}
            miss1={miss1}
            bingo={bingo} />
    );

}

export default Vesalo;