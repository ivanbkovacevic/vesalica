import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head,Clear} from './Body';
import {Wood} from './Wood';

 
class Canvas extends Component {
state={
  erase:false
}
    componentDidMount() {
      console.log('didmount')
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          ctx.clearRect(0,0,400,600);
             //this.animate(ctx);
        }   

        reset=null;

        body={
        aCv:0,
        
        Tx:200,
        Ty:205,

        LHx:200,
        LHy:215,

        RHx:200,
        RHy:215,

        LLx:200,
        LLy:400,

        RLx:200,
        RLy:400,

        sA: Math.radians = function(degrees) {
          return degrees * Math.PI / 180;
        },
         eA: Math.radians = function(degrees) {
          return degrees * Math.PI / 180;
        },
        eAp:180
        }
        /////////////
        // aCv=0;
        
        // Tx=200;
        // Ty=205;

        // LHx=200;
        // LHy=215;

        // RHx=200;
        // RHy=215;

        // LLx=200;
        // LLy=400;

        // RLx=200;
        // RLy=400;

        // sA= Math.radians = function(degrees) {
        //   return degrees * Math.PI / 180;
        // };
        //  eA= Math.radians = function(degrees) {
        //   return degrees * Math.PI / 180;
        // };
        // eAp=180;

        animate=(c)=>{
        
            requestAnimationFrame(this.animate)
            console.log('animate');
            const ctx=this.refs.canvas.getContext("2d");
            ctx.strokeStyle = "white";
            ctx.lineWidth = 10;
            ctx.clearRect(0,0,400,600);
            
            if(this.props.miss1>0){
              if(this.body.eAp<360){
                this.body.aCv+=0.1;
              }
            }
             Head(ctx,this.body.sA(180),this.body.eA(this.body.eAp)+this.body.aCv); 
  
             if(this.props.miss1>1){
              if(this.body.Ty<400){
                this.body.Ty++;
              }
            }
              Torzo(ctx,this.body.Tx,this.body.Ty); 
  
            if(this.props.miss1>2){
              if(this.body.LHy<350){
                this.body.LHx--;
                this.body.LHy++;
              }
            }
              LeftHand(ctx,this.body.LHx,this.body.LHy); 
  
              if(this.props.miss1>3){
                if(this.body.RHy<350){
                  this.body.RHx++;
                  this.body.RHy++;
                }
              }
                RightHand(ctx,this.body.RHx,this.body.RHy); 
  
                if(this.props.miss1>4){
                  if(this.body.LLy<550){
                    this.body.LLx--;
                    this.body.LLy++;
                  }
                }
                  LeftLeg(ctx,this.body.LLx,this.body.LLy); 
  
                  if(this.props.miss1>5){
                    if(this.body.RLy<550){
                      this.body.RLx++;
                      this.body.RLy++;
                    }
                  }
                    RightLeg(ctx,this.body.RLx,this.body.RLy); 
                    Wood(ctx);

                    if(this.state.erase){
                      Clear(ctx);
                    }      

        }


        DrawCanvas=()=>{
          let {erase}=this.state;
          erase=false;
          this.setState({erase});
               this.animate();
        }
        erase=()=>{
        
          let {erase}=this.state;
          erase=true;
          this.setState({erase});
          console.log('clerrrrrrrrrrrrrrrrrrr')
            
         }
        

      render() {
        return(
          <div className="canvas-container">
           <button className="btnMy" onClick={this.DrawCanvas}>DRRRRRRRRR</button>
            <canvas className="canvas" ref="canvas" width={400} height={600} />
            <button  className="test" onClick={this.erase}>KgkkkkkkkkkkkkKK</button>
          </div>
        )
      }
    }

export default Canvas;


