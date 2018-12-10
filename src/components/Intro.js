import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className={`intro-container ${this.props.remove}`}>
                <h1>Dobro došli u igricu Vešalica</h1>
                 <p>Cilj igre je da pogodite zagonetnu rec</p>
                 <p>U pitanju su gradovi Srbije</p>
                 <p>Kliknite na dugme dole desno za pocetak</p>
                
            </div>
        );
    }
}

export default Intro;