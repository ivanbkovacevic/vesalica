import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head} from './Body';
import {Wood} from './Wood';


class Canvas extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;

            LeftHand(ctx);
            RightHand(ctx);
            Torzo(ctx);
            LeftLeg(ctx);
            RightLeg(ctx);
            Head(ctx);
            Wood(ctx);

            // ctx.strokeRect(0, 0, 400, 600);//canvas  ceo
            // ctx.fill();
       
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


