import React, { Component } from 'react';
import image from '../assets/img/download.jpg';

class Canvas extends Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
          ctx.drawImage(img, 10, 10)
          ctx.font = "40px Courier"
          ctx.fillText(this.props.text, 210, 75)
        }
      }
      render() {
        return(
          <div>
            <canvas ref="canvas" width={640} height={425} />
            <img ref="image" src={image} className="hidden" />
            <p>vkjbwergbweiygbiygfbw</p>
          </div>
        )
      }
    }

export default Canvas;


