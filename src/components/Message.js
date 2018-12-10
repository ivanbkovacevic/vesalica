import React, { Component } from 'react';
import $ from 'jquery';

class Message extends Component {
    
 state={
     message:this.props.message
 }

componentWillMount() {
    let{message}=this.state;
    if(message === this.props.message){
        message=this.props.message;
        this.setState({message});
    }
}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.message !== this.props.message) {
        $('#message').fadeOut("slow");
        $('#message').fadeIn("slow");    
        }
      }
    render() {
        return (
            <div id="message" className="message">
                <span className={`message-icon ${this.props.hide}`}> 
                   {this.props.message==='Pogodili ste slovo' ? <span>&#10004;</span> : <span>&#10006;</span> }
                </span> 
            <div className="blink">{this.props.message}</div>
        </div>
        );
    }
}

export default Message;
