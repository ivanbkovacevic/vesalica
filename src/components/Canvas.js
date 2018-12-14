import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head,Clear} from './Body';
import {Wood} from './Wood';
import {DropHead} from './utility';

 
class Canvas extends Component {
state={
  erase:false,
  aCv:0, 
  Tx:200,Ty:205,
  LHx:200,LHy:215,
  RHx:200,RHy:215,
  LLx:200,LLy:400,
  RLx:200,RLy:400,
  sAv:180,eAv:180,
  WVx:0,WVy:600,WHx:0,WHy:0,Rx:200,Ry:0,
  dv5:5,
  ry:150

  }

    componentDidMount() {
      console.log('didmount')
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          ctx.clearRect(0,0,400,600);
        }   

        reset=null;

        animate=()=>{
          let {aCv,Tx,Ty,LHx, LHy,RHx, RHy,LLx, LLy,RLx, RLy,sAv,eAv, WVx,WVy,WHx,WHy,Rx,Ry,dv5,ry}=this.state;
            requestAnimationFrame(this.animate)
            console.log('animate');
            const ctx=this.refs.canvas.getContext("2d");
            ctx.strokeStyle = "white";
            ctx.lineWidth = 10;
            ctx.clearRect(0,0,400,600);

            let sA=Math.radians = function(degrees) {
                 return degrees * Math.PI / 180;
               };
            let eA= Math.radians = function(degrees) {
                   return degrees * Math.PI / 180;
                 };
            if(this.props.miss1>0){
              
                if(aCv<360){
                  aCv+=1;              
            }else if(this.props.miss1>5){///////////////////
              if(ry<700){
                ry+=dv5;
              }
              
               
              }
            }
            Head(ctx,sA(sAv),eA(eAv+aCv),ry); 
        //    DropHead(ctx,sA(sAv),eA(eAv+aCv),ry);         

             if(this.props.miss1>1){
              if(Ty<400){
                Ty+=5;
              }
            }
              Torzo(ctx,Tx,Ty); 
            if(this.props.miss1>2){
              if(LHy<350){
                LHx-=5;
                LHy+=5;
              }
            }
              LeftHand(ctx,LHx,LHy); 
              if(this.props.miss1>3){
                if(RHy<350){
                  RHx+=5;
                  RHy+=5;
                }
              }
                RightHand(ctx,RHx,RHy); 
                if(this.props.miss1>4){
                  if(LLy<550){
                    LLx-=5;
                    LLy+=5;
                  }
                }
                  LeftLeg(ctx,LLx,LLy); 
                  if(this.props.miss1>5){
                    if(RLy<550){
                      RLx+=5;
                      RLy+=5;
                    }
                  }
                    RightLeg(ctx,RLx,RLy);


                    if(this.props.drawCanvas){
                      if(WVy>0){
                        WVy-=10;  
                      }
                      if(WHx<250){
                        WHx+=5;
                      }
                      if(Ry<100){
                        Ry+=4;
                      }
                      Wood(ctx,WVx,WVy,WHx,WHy,Rx,Ry);
                   
                    }   

                    if(this.state.erase){//brisanje canvasa
                      Clear(ctx);
                      aCv=0;
                      Tx=200;
                      Ty=205;
                      LHx=200; 
                      LHy=215;
                      RHx=200; 
                      RHy=215;
                      LLx=200;
                      LLy=400;
                      RLx=200;
                      RLy=400;
                      sAv=180;
                      eAv=180;
                      WVx=0;WVy=600;WHx=0;WHy=0;Rx=200;Ry=0;ry=150;

                      this.setState({aCv,Tx,Ty,LHx, LHy,RHx, RHy,LLx, LLy,RLx, RLy,sAv,eAv,
                         WVx,WVy,WHx,WHy,Rx,Ry,ry});
                    }    
                    
                    this.setState({aCv,Tx,Ty,LHx, LHy,RHx, RHy,LLx, LLy,RLx, RLy,sAv,eAv, 
                      WVx,WVy,WHx,WHy,Rx,Ry,ry});

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


