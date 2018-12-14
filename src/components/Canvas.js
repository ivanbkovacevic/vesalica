import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head} from './Body';
import {Wood} from './Wood';

 
class Canvas extends Component {
    componentDidMount() {
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
            // LeftHand(ctx); 
            // RightHand(ctx);
            // Torzo(ctx);
            // LeftLeg(ctx);
            // RightLeg(ctx);
            // Head(ctx);
            // Wood(ctx);
             this.animate(ctx)
            
        }   

    
         aCv=0;
        LHx=200;
        LHy=215;
        Tx=200;
        Ty=205;

        sA= Math.radians = function(degrees) {
          return degrees * Math.PI / 180;
        };
         eA= Math.radians = function(degrees) {
          return degrees * Math.PI / 180;
        };
        eAp=180;

        animate=()=>{
          requestAnimationFrame(this.animate)
          console.log('animate');
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          ctx.clearRect(0,0,400,600);
          
          if(this.props.miss1>0){
            if(this.eAp<360){
              this.aCv+=0.1;
            }
          }
           Head(ctx,this.sA(180),this.eA(this.eAp)+this.aCv); 

           if(this.props.miss1>1){
            if(this.Ty<400){
              this.Ty++;
            }
          }
            Torzo(ctx,this.Tx,this.Ty); 

          if(this.props.miss1>2){
            if(this.LHy<350){
              this.LHx--;
              this.LHy++;
            }
          }
            LeftHand(ctx,this.LHx,this.LHy); 
          
     
          RightHand(ctx);
          
          LeftLeg(ctx);
          RightLeg(ctx);
          Head(ctx);
          Wood(ctx);
        
        }
     
        
      render() {
     
        return(
          <div className="canvas-container">
            <canvas className="canvas" ref="canvas" width={400} height={600} />
          </div>
        )
      }
    }

export default Canvas;


