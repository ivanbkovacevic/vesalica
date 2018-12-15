import React, { Component } from 'react';
import image from '../assets/img/download.jpg';
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head,Clear} from './Body';
import {Wood} from './Wood';
 
class Canvas extends Component {
state={
  erase:false,
  aCv:0, 
  Tx1:200,Ty1:205,Tx2:200,Ty2:205,
  LHx1:200,LHy1:215,LHx2:200,LHy2:215,
  RHx1:200,RHy1:215, RHx2:200,RHy2:215,
  LLx1:200,LLy1:400,LLx2:200,LLy2:400,
  RLx1:200,RLy1:400,RLx2:200,RLy2:400,
  sAv:180,eAv:180,
  WVx:0,WVy:600,WHx:0,WHy:0,Rx:200,Ry:0,
  dv5:5,
  dvY:150

  }
    componentDidMount() {
          const ctx=this.refs.canvas.getContext("2d");
          ctx.strokeStyle = "white";
          ctx.lineWidth = 10;
          ctx.clearRect(0,0,400,600);
        }   
        animate=()=>{
          let {aCv,Tx1,Ty1,Tx2,Ty2,
            LHx1,LHy1,LHx2,LHy2,
            RHx1,RHy1,RHx2,RHy2,
            LLx1,LLy1,LLx2,LLy2,
            RLx1,RLy1,RLx2,RLy2,
            sAv,eAv, WVx,WVy,WHx,WHy,Rx,Ry,dv5,dvY}=this.state;
            requestAnimationFrame(this.animate)
            console.log('animate');
            const ctx=this.refs.canvas.getContext("2d");
            ctx.strokeStyle = "white";
            ctx.lineWidth = 10;
            ctx.clearRect(0,0,400,600);
/////////////////////////////////////////////////////////////////////////
            let sA=Math.radians = function(degrees) {
                 return degrees * Math.PI / 180;
               };
            let eA= Math.radians = function(degrees) {
                   return degrees * Math.PI / 180;
                 };

            if(this.props.miss1>0){
                if(aCv<360){
                  aCv+=6;              
            }else if(this.props.miss1>6){
                if(dvY<700){
                   dvY+=dv5;
                }           
              }
            }
            Head(ctx,sA(sAv),eA(eAv+aCv),dvY); 
////////////////////////////////////////////////////////////     
             if(this.props.miss1>1){
              if(Ty2<400){
                Ty2+=5;
              }else if(this.props.miss1>6 && Ty1<700){
                Ty1+=dv5;
                Ty2+=dv5;
              }
            }
              Torzo(ctx,Tx1,Ty1,Tx2,Ty2); 
 ///////////////////////////////////////////////////////////            
            if(this.props.miss1>2){
              if(LHy2<350){
                LHx2-=5;
                LHy2+=5;
              }else if(this.props.miss1>6 && LHy1<700){
                LHy1+=dv5;
                LHy2+=dv5;
              }
            }
              LeftHand(ctx,LHx1,LHy1,LHx2,LHy2); 
 ////////////////////////////////////////////////////////////           
              if(this.props.miss1>3){
                if(RHy2<350){
                  RHx2+=5;
                  RHy2+=5;
                }else if(this.props.miss1>6 && RHy1<700){
                  RHy1+=dv5;
                  RHy2+=dv5;
                }
              }
                RightHand(ctx,RHx1,RHy1,RHx2,RHy2); 
 ////////////////////////////////////////////////////////////               
                if(this.props.miss1>4){
                  if(LLy2<550){
                    LLx2-=5;
                    LLy2+=5;
                  }else if(this.props.miss1>6 && LLy1<700){
                    LLy1+=dv5;
                    LLy2+=dv5;
                  }
                }
                  LeftLeg(ctx,LLx1,LLy1,LLx2,LLy2); 
 ////////////////////////////////////////////////////////////                 
                  if(this.props.miss1>5){
                    if(RLy2<550){
                      RLx2+=5;
                      RLy2+=5;
                    }else if(this.props.miss1>6 && RLy1<700){                 
                        RLy1+=dv5;
                        RLy2+=dv5; 
                    }
                  }
                    RightLeg(ctx,RLx1,RLy1,RLx2,RLy2,);
///////////////////////////////////////////////////////////////
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
 /////////////////////////////////////////////////////////////////                  
                    if(this.state.erase){//brisanje canvasa
                      Clear(ctx);
                      aCv=0;
                      Tx1=200;Ty1=205;Tx2=200;Ty2=205;
                      LHx1=200; LHy1=215; LHx2=200; LHy2=215;
                      RHx1=200; RHy1=215;  RHx2=200; RHy2=215;
                      LLx1=200;LLy1=400; LLx2=200;LLy2=400;
                      RLx1=200;RLy1=400; RLx2=200;RLy2=400;
                      sAv=180;
                      eAv=180;
                      WVx=0;WVy=600;WHx=0;WHy=0;Rx=200;Ry=0;dvY=150;

                      this.setState({aCv,Tx1,Ty1,Tx2,Ty2,
                        LHx1,LHy1,LHx2,LHy2,
                        RHx1,RHy1,RHx2,RHy2,
                        LLx1,LLy1,LLx2,LLy2,
                        RLx1,RLy1,RLx2,RLy2,
                        sAv,eAv,
                         WVx,WVy,WHx,WHy,Rx,Ry,dvY,});
                    }    
                    
                    this.setState({aCv,Tx1,Ty1,Tx2,Ty2,
                      LHx1,LHy1,LHx2,LHy2,
                      RHx1,RHy1,RHx2,RHy2,
                      LLx1,LLy1,LLx2,LLy2,
                      RLx1,RLy1,RLx2,RLy2,
                      sAv,eAv, 
                      WVx,WVy,WHx,WHy,Rx,Ry,dvY});

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


