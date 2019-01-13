import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
class Facebook extends Component {
    state={
        isLoggedIn:false,
        userId:'',
        name:'',
        email:'',
        picture:''
    }

    responseFacebook=response=>{
        console.log(response);

        this.setState({
            isLoggedIn:true,
            userId:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        });
    }

    componentClicked=()=>{
        console.log('clicked')
    }
    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent=(
                <div >
                    <img src={this.state.picture} alt={this.state.name}/>
                    <span>Welcome {this.state.name}</span>
                </div>
            );
        }else{
            fbContent=(<FacebookLogin
            appId="215257779420668"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
        }
        return (
            <div className='fblogin'>
                {fbContent}
            </div>
        );
    }
}

export default Facebook;