import React, { Component } from 'react';
import '../css/vesalica.css';
import Canvas from'./Canvas';

class Vesalo extends Component {
    render() {
        let miss1=this.props.missed;
        let gameStarted=this.props.gameStarted;
        let bingo=this.props.bingo;
        return (   
            <Canvas message={this.props.message} 
            gameStarted={gameStarted} 
            miss1={miss1}
            bingo={bingo}/>
        );
    }
}

export default Vesalo;