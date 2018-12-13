import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head} from './Body';
import {Wood} from './Wood';


class Canvas extends Component {
  state={
    ctx:null
  }
    componentDidMount() {
          let{ctx}=this.state;
          ctx=this.refs.canvas.getContext("2d");
         
          this.setState({ctx});
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
           // LeftHand(ctx); 
            RightHand(ctx);
            Torzo(ctx);
            LeftLeg(ctx);
            RightLeg(ctx);
            Head(ctx);
            Wood(ctx);
  
            this.test('test');
            this.animate(ctx)
        }   

        test=(x)=>{
          console.log(x);
        } 
        
       
        animate=()=>{
          requestAnimationFrame(this.animate)
          console.log('animate');
        
          // LeftHand(this.state.ctx); 
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


