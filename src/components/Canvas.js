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

        ang=0.5;
         dv=0.1;
        LHx=200;
        LHy=215;
        animate=()=>{
          requestAnimationFrame(this.animate)
          console.log('animate');
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          ctx.clearRect(0,0,400,600);
        
          this.dv=this.dv+0.01;

          if(this.props.miss1>0){
            if(this.ang<2){
              this.ang=this.dv;
            }
          }
           Head(ctx,this.ang); 

          if(this.props.miss1>1){
            if(this.LHy<350){
              this.LHx--;
              this.LHy++;
            }
          }
            LeftHand(ctx,this.LHx,this.LHy); 
          
     
          RightHand(ctx);
          Torzo(ctx);
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


