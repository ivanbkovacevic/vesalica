import React, { Component } from 'react';
import image from '../assets/img/download.jpg';

class Canvas extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
          ctx.drawImage(img, 10, 10)
          img.border=""
          ctx.font = "40px Courier"
          ctx.fillText(this.props.text, 210, 75)
          ctx.fillStyle = "yellow";
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;

            ctx.beginPath();//glava
            ctx.arc(200,150,50,0,2*Math.PI);
            ctx.lineWidth = 10;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(200,215);// ruka levo pocetak
            ctx.lineTo(50,350);
            ctx.stroke();

            ctx.moveTo(200,215);// ruka desno
            ctx.lineTo(350,350);
            ctx.stroke();

            ctx.beginPath();// Torzo
            ctx.moveTo(200, 205);
            ctx.lineTo(200, 400);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(200,400);// noga levo pocetak
            ctx.lineTo(50,550);

            ctx.moveTo(200,400);// noga desno pocetak
            ctx.lineTo(350,550);
            ctx.stroke();

            
     
            ctx.strokeRect(0, 0, 400, 600);//canvas  ceo
            ctx.fill();

        }
      }
      render() {
        return(
          <div>
            <canvas ref="canvas" width={400} height={600} />
            <img ref="image" src={image} className="hidden" />
            <p>vkjbwergbweiygbiygfbw</p>
          </div>
        )
      }
    }

export default Canvas;


