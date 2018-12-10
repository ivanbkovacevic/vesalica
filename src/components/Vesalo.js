import React, { Component } from 'react';
import '../css/vesalica.css';

class Vesalo extends Component {

    render() {
        return (
            <div className='vesalo-container'>   
               {this.props.missed >0 ? <div className='vesalo-glava'>-</div> : null}
               {this.props.missed >1 ? <div className='vesalo-torzo'>-</div>: null}
               {this.props.missed >2 ? <div className='vesalo-Lruka'>-</div>: null}
                {this.props.missed >3 ? <div className='vesalo-Druka'>-</div>: null}
                {this.props.missed >4 ? <div className='vesalo-Lnoga'>-</div>: null}
                {this.props.missed >5 ? <div className='vesalo-Dnoga'>-</div>: null}
            </div>
            
       
        );
    }
}

export default Vesalo;