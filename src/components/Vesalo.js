import React, { Component } from 'react';
import '../css/vesalica.css';
import Canvas from'./Canvas';

class Vesalo extends Component {
    render() {
        let miss1=this.props.missed;
        let drawCanvas=this.props.drawCanvas;
        return (
            <div className='vesalo-container'>   
            <Canvas drawCanvas={drawCanvas} miss1={miss1}/>
               {/* {this.props.missed >0 ? <div className='vesalo-glava'>-</div> : null}
               {this.props.missed >1 ? <div className='vesalo-torzo'>-</div>: null}
               {this.props.missed >2 ? <div className='vesalo-Lruka'>-</div>: null}
                {this.props.missed >3 ? <div className='vesalo-Druka'>-</div>: null}
                {this.props.missed >4 ? <div className='vesalo-Lnoga'>-</div>: null}
                {this.props.missed >5 ? <div className='vesalo-Dnoga'>-</div>: null} */}
            </div>
            
       
        );
    }
}

export default Vesalo;