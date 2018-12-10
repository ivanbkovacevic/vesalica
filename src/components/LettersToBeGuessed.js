import React, { Component } from 'react';
import '../css/vesalica.css';

class LettersToBeGuessed extends Component {

    render() {
        let isUsed=this.props.isUsed;
        let classUsed='';
        if(isUsed){
            classUsed=' used';
        }
        return (
          <button onClick={this.props.clicked} disabled={isUsed} className={`slova${classUsed}`}>{this.props.value}</button>
            
        );
    }
}

export default LettersToBeGuessed;