import React, { Component } from 'react';
import '../css/vesalica.css';

const LettersToBeGuessed = (props) => {
    let isUsed = props.isUsed;
    let classUsed = '';
    if (isUsed) {
        classUsed = ' used';
    }
    return (
        <button onClick={props.clicked}
            disabled={isUsed}
            className={`slova${classUsed}`}>{props.value}</button>

    );

}

export default LettersToBeGuessed;