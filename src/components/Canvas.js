import React, { Component } from 'react';
import img from '../assets/img/chalk1.png';
import audio from "../assets/audio/ChalkCrop.mp3";
import {LeftHand,RightHand,Torzo,LeftLeg,RightLeg,Head,Clear,HeadTest} from './Body';
import {Wood} from './Wood';
import {PlayAudio,PauseAudio} from './utility';
 
class Canvas extends Component {
state={
  erase:false,
  aCv:0, 
  Tx1:200,Ty1:205,Tx2:200,Ty2:205,  Tbx:200,Tby:205,
  LHx1:200,LHy1:215,LHx2:200,LHy2:215, LHbx:200,LHby:215,
  RHx1:200,RHy1:215, RHx2:200,RHy2:215,  RHbx:200,RHby:215,
  LLx1:200,LLy1:400,LLx2:200,LLy2:400,  LLbx:200,LLby:400,  
  RLx1:200,RLy1:400,RLx2:200,RLy2:400,  RLbx:200,RLby:400,
  sAv:180,eAv:180,
  WVx:0,WVy:600,  WVbx:0,WVby:600,
  WHx:0,WHy:0,    WHbx:0,WHby:0,
  Rx:200,Ry:0,    Rbx:200,Rby:0,
  dv5:5,
  dvY:150,
  dirChange:1,
  HeadRight:{x1:200,y1:100,
             bx1:200,by1:100,
             bx2:200,by2:100,
             x2:200,y2:100},
  HeadLeft:{x1:200,y1:100,
            bx1:200,by1:100,
            bx2:200,by2:100,
            x2:200,y2:100}

  }
    componentDidMount() {
     let myAudio=this.refs.myAudio;
      PlayAudio(myAudio);
          this.animate();
    }
    componentWillReceiveProps(nextProps){
      let {aCv,Tx1,Ty1,Tx2,Ty2,  Tbx,Tby,
      LHx1,LHy1,LHx2,LHy2,   LHbx,LHby,
      RHx1,RHy1,RHx2,RHy2,  RHbx,RHby,
        LLx1,LLy1,LLx2,LLy2, LLbx,LLby, 
        RLx1,RLy1,RLx2,RLy2, RLbx,RLby, 
        sAv,eAv, 
        WVx,WVy,    WVbx,WVby,
        WHx,WHy,    WHbx,WHby,
        Rx,Ry,
        dv5,dvY,
        dirChange,HeadRight,HeadLeft}=this.state;

      if(nextProps.gameStarted!==this.props.gameStarted){
      const ctx=this.refs.canvas.getContext("2d");
        Clear(ctx);
        aCv=0;
        Tx1=200;Ty1=205;Tx2=200;Ty2=205;Tbx=200;Tby=205;
        LHx1=200; LHy1=215; LHx2=200; LHy2=215; LHbx=200;LHby=215;
        RHx1=200; RHy1=215;  RHx2=200; RHy2=215;  RHbx=200;RHby=215;
        LLx1=200;LLy1=400; LLx2=200;LLy2=400; LLbx=200; LLby=400; 
        RLx1=200;RLy1=400; RLx2=200;RLy2=400;  RLbx=200; RLby=400; 
        sAv=180;
        eAv=180;
        Rx=200;Ry=0;
        dvY=150;
        dirChange=1;
        HeadRight={x1:200,y1:100,
          bx1:200,by1:100,
          bx2:200,by2:100,
          x2:200,y2:100};

         HeadLeft={x1:200,y1:100,
         bx1:200,by1:100,
         bx2:200,by2:100,
         x2:200,y2:100}

        this.setState({aCv,Tx1,Ty1,Tx2,Ty2,  Tbx,Tby,
        LHx1,LHy1,LHx2,LHy2,  LHbx,LHby,
        RHx1,RHy1,RHx2,RHy2,  RHbx,RHby,
        LLx1,LLy1,LLx2,LLy2,  LLbx,LLby, 
        RLx1,RLy1,RLx2,RLy2,  RLbx,RLby, 
        sAv,eAv,
        WVx,WVy,   WVbx,WVby,
        WHx,WHy,   WHbx,WHby,
        Rx,Ry,
        dirChange,
        dvY,HeadRight,HeadLeft});
      }
      if(nextProps.miss1!==this.props.miss1){
        let myAudio=this.refs.myAudio;      
        PlayAudio(myAudio);
      }
      if(nextProps.bingo!==this.props.bingo){
        let myAudio=this.refs.myAudio;
        PlayAudio(myAudio);
      }
    }

        animate=()=>{
          let {aCv,Tx1,Ty1,Tx2,Ty2,  Tbx,Tby,
          LHx1,LHy1,LHx2,LHy2,  LHbx,LHby,
          RHx1,RHy1,RHx2,RHy2,  RHbx,RHby,
            LLx1,LLy1,LLx2,LLy2,  LLbx,LLby, 
            RLx1,RLy1,RLx2,RLy2,  RLbx,RLby, 
            sAv,eAv, 
            WVx,WVy,    WVbx,WVby,
            WHx,WHy,    WHbx,WHby,
            Rx,Ry,dirChange,
            dv5,dvY,HeadRight,HeadLeft}=this.state;

            requestAnimationFrame(this.animate)
            let image = new Image();
            const ctx = this.refs.canvas.getContext("2d");
            ctx.lineWidth = 10;
            image.src = img;
            let imgPattern = ctx.createPattern(image, "repeat");
            ctx.strokeStyle = imgPattern;
            ctx.clearRect(0, 0, 400, 600);
/////////////////////////////////////////////////////////////////////////
            // let sA=Math.radians = function(degrees) {
            //      return degrees * Math.PI / 180;
            //    };
            // let eA= Math.radians = function(degrees) {
            //        return degrees * Math.PI / 180;
            //      };

            // if(this.props.miss1>0){
            //     if(aCv<360){
            //       aCv+=6;              
            // }else if(this.props.miss1>6){
            //     if(dvY<700){
            //        dvY+=dv5;
            //     }           
            //   }
            // }

            if(this.props.miss1>0){
              if(HeadRight.y2<200){
                HeadRight.y2+=2;
                HeadRight.bx1=270;
                HeadRight.by1=120;
                HeadRight.bx2=270;
                HeadRight.by2=170;
                
                HeadLeft.y2+=2;
                HeadLeft.bx1=130 ;
                HeadLeft.by1=120;
                HeadLeft.bx2=130;
                HeadLeft.by2=170;
                HeadRight.x2+=2*dirChange;
                if(HeadRight.x2===250){
                    dirChange=-1;
                }
                
               
              }else if(this.props.miss1>6  && HeadLeft.y1<700 ){
                HeadLeft.y1+=dv5;
                HeadRight.y1+=dv5;
                HeadLeft.y2+=dv5;
                HeadRight.y2+=dv5;

                HeadLeft.by1+=dv5;
                HeadRight.by1+=dv5;
                HeadLeft.by2+=dv5;
                HeadRight.by2+=dv5;
            }
          }
           // Head(ctx,sA(sAv),eA(eAv+aCv),dvY); 
            HeadTest(ctx,HeadRight,HeadLeft);
////////////////////////////////////////////////////////////     
             if(this.props.miss1>1){
              if(Ty2<400){
                Ty2+=5;
                Tbx=220;
               Tby=300;
              }else if(this.props.miss1>6 && Ty1<700){
                Ty1+=dv5;
                Ty2+=dv5;
                Tby+=dv5;
              }
            }
              Torzo(ctx,Tx1,Ty1,Tx2,Ty2,Tbx,Tby);  ///////////////////////////////////////////////////////////            
            if(this.props.miss1>2){ 
              if(LHy2<350){
                LHbx=150;
                LHby=220;
                LHx2-=5;
                LHy2+=5;
              }else if(this.props.miss1>6 && LHy1<700){
                LHy1+=dv5;
                LHy2+=dv5;    
                LHby+=dv5;
              }
            }
              LeftHand(ctx,LHx1,LHy1,LHx2,LHy2,LHbx,LHby);  ////////////////////////////////////////////////////////////           
              if(this.props.miss1>3){       
                if(RHy2<350){
                  RHbx=250;
                  RHby=270;
                  RHx2+=5;
                  RHy2+=5;
                }else if(this.props.miss1>6 && RHy1<700){
                  RHy1+=dv5;
                  RHy2+=dv5;
                  RHby+=dv5;
                }
              }
                RightHand(ctx,RHx1,RHy1,RHx2,RHy2,RHbx,RHby); 
 ////////////////////////////////////////////////////////////               
                if(this.props.miss1>4){
                  if(LLy2<550){
                    LLbx=150;
                    LLby=420;

                    LLx2-=5;
                    LLy2+=5;
                  }else if(this.props.miss1>6 && LLy1<700){
                    LLy1+=dv5;
                    LLy2+=dv5;
                    LLby+=dv5;
                  }
                }
                  LeftLeg(ctx,LLx1,LLy1,LLx2,LLy2,LLbx,LLby); 
 ////////////////////////////////////////////////////////////                 
                  if(this.props.miss1>5){
                    if(RLy2<550){
                      RLbx=260;
                      RLby=420;

                      RLx2+=5;
                      RLy2+=5;
                    }else if(this.props.miss1>6 && RLy1<700){                 
                        RLy1+=dv5;
                        RLy2+=dv5; 
                        RLby+=dv5;
                    }
                  }
                    RightLeg(ctx,RLx1,RLy1,RLx2,RLy2,RLbx,RLby); 
///////////////////////////////////////////////////////////////
                 
                      if(WVy>0){
                        WVy-=10;  
                      }
                      if(WHx<250){
                        WHx+=5;
                      }
                      if(Ry<100){
                        Ry+=4;
                      }
                      WVbx=50;
                      WVby=300;
                      WHbx=170;
                      WHby=50;
                      Wood(ctx,WVx,WVy,WVbx,WVby,
                        WHx,WHy,WHbx,WHby,
                        Rx,Ry);
                    
                    this.setState({aCv,Tx1,Ty1,Tx2,Ty2,  Tbx,Tby,
                    LHx1,LHy1,LHx2,LHy2,  LHbx,LHby,
                    RHx1,RHy1,RHx2,RHy2,  RHbx,RHby,
                      LLx1,LLy1,LLx2,LLy2,  LLbx,LLby,
                      RLx1,RLy1,RLx2,RLy2,  RLbx,RLby,
                      sAv,eAv, 
                      WVx,WVy,    WVbx,WVby,
                      WHx,WHy,    WHbx,WHby,
                      Rx,Ry,dirChange,
                      dvY,HeadRight,HeadLeft});
 /////////////////////////////////////////////////////////////////     
      }    

      render() {
        return(
          <div className="canvas-container">
          <audio ref="myAudio"><source src={audio} type="audio/mpeg"></source></audio>
            <canvas className="canvas" ref="canvas" width={400} height={600} /> 
          </div>
        )
      }
    }

export default Canvas;


