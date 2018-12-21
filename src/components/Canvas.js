import React, { Component } from 'react';
import img from '../assets/img/chalk1.png';
import audio from "../assets/audio/ChalkCrop.mp3";
import { LeftHand, RightHand, Torzo, LeftLeg, RightLeg, Head, Clear, HeadTest, EyeLeft, EyeRight } from './Body';
import { Wood } from './Wood';
import { PlayAudio } from './utility';

class Canvas extends Component {
  state = {
    erase: false,
    aCv: 0,
    Tx1: 200, Ty1: 205, Tx2: 200, Ty2: 205, Tbx: 200, Tby: 205,
    LHx1: 200, LHy1: 215, LHx2: 200, LHy2: 215, LHbx: 200, LHby: 215,
    RHx1: 200, RHy1: 215, RHx2: 200, RHy2: 215, RHbx: 200, RHby: 215,
    LLx1: 200, LLy1: 400, LLx2: 200, LLy2: 400, LLbx: 200, LLby: 400,
    RLx1: 200, RLy1: 400, RLx2: 200, RLy2: 400, RLbx: 200, RLby: 400,
    sAv: 180, eAv: 180,
    WVx: 0, WVy: 600, WVbx: 0, WVby: 600,
    WHx: 0, WHy: 0, WHbx: 0, WHby: 0,
    Rx: 200, Ry: 0, Rbx: 200, Rby: 0,
    dv5: 5,
    dvY: 150,
    dirChange: 1,
    HeadRight: {
      x1: 200, y1: 100,
      bx1: 200, by1: 100,
      bx2: 200, by2: 100,
      x2: 200, y2: 100
    },
    HeadLeft: {
      x1: 200, y1: 100,
      bx1: 200, by1: 100,
      bx2: 200, by2: 100,
      x2: 200, y2: 100
    },

    LeftEye: {
      beginx1: 182,
      beginy1: 135,
      endx1: 182,
      endy1: 135,

      beginx2: 168,
      beginy2: 135,
      endx2: 168,
      endy2: 135
    },
    RightEye: {
      beginx1: 222,
      beginy1: 135,
      endx1: 222,
      endy1: 135,

      beginx2: 208,
      beginy2: 135,
      endx2: 208,
      endy2: 135
    }


  }
  componentDidMount() {
    let myAudio = this.refs.myAudio;
    PlayAudio(myAudio);
    this.animate();
  }
  componentWillReceiveProps(nextProps) {
    let { aCv, Tx1, Ty1, Tx2, Ty2, Tbx, Tby,
      LHx1, LHy1, LHx2, LHy2, LHbx, LHby,
      RHx1, RHy1, RHx2, RHy2, RHbx, RHby,
      LLx1, LLy1, LLx2, LLy2, LLbx, LLby,
      RLx1, RLy1, RLx2, RLy2, RLbx, RLby,
      sAv, eAv,
      WVx, WVy, WVbx, WVby,
      WHx, WHy, WHbx, WHby,
      Rx, Ry,
      dv5, dvY,
      dirChange, HeadRight, HeadLeft, LeftEye, RightEye, leaderboard } = this.state;

    if (nextProps.gameStarted !== this.props.gameStarted) {
      const ctx = this.refs.canvas.getContext("2d");
      Clear(ctx);
      aCv = 0;
      Tx1 = 200; Ty1 = 205; Tx2 = 200; Ty2 = 205; Tbx = 200; Tby = 205;
      LHx1 = 200; LHy1 = 215; LHx2 = 200; LHy2 = 215; LHbx = 200; LHby = 215;
      RHx1 = 200; RHy1 = 215; RHx2 = 200; RHy2 = 215; RHbx = 200; RHby = 215;
      LLx1 = 200; LLy1 = 400; LLx2 = 200; LLy2 = 400; LLbx = 200; LLby = 400;
      RLx1 = 200; RLy1 = 400; RLx2 = 200; RLy2 = 400; RLbx = 200; RLby = 400;
      sAv = 180;
      eAv = 180;
      Rx = 200; Ry = 0;
      dvY = 150;
      dirChange = 1;
      HeadRight = {
        x1: 200, y1: 100,
        bx1: 200, by1: 100,
        bx2: 200, by2: 100,
        x2: 200, y2: 100
      };

      HeadLeft = {
        x1: 200, y1: 100,
        bx1: 200, by1: 100,
        bx2: 200, by2: 100,
        x2: 200, y2: 100
      };

      LeftEye = {
        beginx1: 182,
        beginy1: 135,
        endx1: 182,
        endy1: 135,

        beginx2: 168,
        beginy2: 135,
        endx2: 168,
        endy2: 135
      }
      RightEye = {
        beginx1: 222,
        beginy1: 135,
        endx1: 222,
        endy1: 135,

        beginx2: 208,
        beginy2: 135,
        endx2: 208,
        endy2: 135
      }

      this.setState({
        aCv, Tx1, Ty1, Tx2, Ty2, Tbx, Tby,
        LHx1, LHy1, LHx2, LHy2, LHbx, LHby,
        RHx1, RHy1, RHx2, RHy2, RHbx, RHby,
        LLx1, LLy1, LLx2, LLy2, LLbx, LLby,
        RLx1, RLy1, RLx2, RLy2, RLbx, RLby,
        sAv, eAv,
        WVx, WVy, WVbx, WVby,
        WHx, WHy, WHbx, WHby,
        Rx, Ry,
        dirChange,
        dvY, HeadRight, HeadLeft, LeftEye, RightEye
      });
    }
    if (nextProps.miss1 !== this.props.miss1) {
      let myAudio = this.refs.myAudio;
      PlayAudio(myAudio);
    }
    if (nextProps.bingo !== this.props.bingo) {
      let myAudio = this.refs.myAudio;
      PlayAudio(myAudio);
    }
  }

  animate = () => {
    let { aCv, Tx1, Ty1, Tx2, Ty2, Tbx, Tby,
      LHx1, LHy1, LHx2, LHy2, LHbx, LHby,
      RHx1, RHy1, RHx2, RHy2, RHbx, RHby,
      LLx1, LLy1, LLx2, LLy2, LLbx, LLby,
      RLx1, RLy1, RLx2, RLy2, RLbx, RLby,
      sAv, eAv,
      WVx, WVy, WVbx, WVby,
      WHx, WHy, WHbx, WHby,
      Rx, Ry, dirChange, LeftEye,
      dv5, dvY, HeadRight, HeadLeft, RightEye, leaderboard } = this.state;

    requestAnimationFrame(this.animate)
    let image = new Image();
    const ctx = this.refs.canvas.getContext("2d");
    ctx.lineWidth = 10;
    image.src = img;
    let imgPattern = ctx.createPattern(image, "repeat");
    ctx.strokeStyle = imgPattern;
    ctx.clearRect(0, 0, 400, 600);
    /////////////////////////////////////////////////////////////////////////
    let sA = Math.radians = function (degrees) {
      return degrees * Math.PI / 180;
    };
    let eA = Math.radians = function (degrees) {
      return degrees * Math.PI / 180;
    };

    if (this.props.miss1 > 0) {
      if (aCv < 360) {
        aCv += 6;
      } else if (this.props.miss1 > 7) {
        if (dvY < 700) {
          dvY += dv5;
        }
      }
    }

    //   if(this.props.miss1>0){
    //     if(HeadRight.y2<200){
    //       HeadRight.y2+=2;
    //       HeadRight.bx1=270;
    //       HeadRight.by1=120;
    //       HeadRight.bx2=270;
    //       HeadRight.by2=170;

    //       HeadLeft.y2+=2;
    //       HeadLeft.bx1=130 ;
    //       HeadLeft.by1=120;
    //       HeadLeft.bx2=130;
    //       HeadLeft.by2=170;
    //       HeadRight.x2+=2*dirChange;
    //       if(HeadRight.x2===250){
    //           dirChange=-1;
    //       }


    //     }else if(this.props.miss1>7  && HeadLeft.y1<700 ){
    //       HeadLeft.y1+=dv5;
    //       HeadRight.y1+=dv5;
    //       HeadLeft.y2+=dv5;
    //       HeadRight.y2+=dv5;

    //       HeadLeft.by1+=dv5;
    //       HeadRight.by1+=dv5;
    //       HeadLeft.by2+=dv5;
    //       HeadRight.by2+=dv5;
    //   }
    // }
    Head(ctx, sA(sAv), eA(eAv + aCv), dvY);
    // HeadTest(ctx,HeadRight,HeadLeft);
    ////////////////////////////////////////////////////////////     
    if (this.props.miss1 > 1) {
      if (Ty2 < 400) {
        Ty2 += 5;
        Tbx = 210;
        Tby = 300;
      } else if (this.props.miss1 > 7 && Ty1 < 700) {
        Ty1 += dv5;
        Ty2 += dv5;
        Tby += dv5;
      }
    }
    Torzo(ctx, Tx1, Ty1, Tx2, Ty2, Tbx, Tby);  ///////////////////////////////////////////////////////////            
    if (this.props.miss1 > 2) {
      if (LHy2 < 350) {
        LHbx = 150;
        LHby = 220;
        LHx2 -= 5;
        LHy2 += 5;
      } else if (this.props.miss1 > 7 && LHy1 < 700) {
        LHy1 += dv5;
        LHy2 += dv5;
        LHby += dv5;
      }
    }
    LeftHand(ctx, LHx1, LHy1, LHx2, LHy2, LHbx, LHby);  ////////////////////////////////////////////////////////////           
    if (this.props.miss1 > 3) {
      if (RHy2 < 350) {
        RHbx = 250;
        RHby = 270;
        RHx2 += 5;
        RHy2 += 5;
      } else if (this.props.miss1 > 7 && RHy1 < 700) {
        RHy1 += dv5;
        RHy2 += dv5;
        RHby += dv5;
      }
    }
    RightHand(ctx, RHx1, RHy1, RHx2, RHy2, RHbx, RHby);
    ////////////////////////////////////////////////////////////               
    if (this.props.miss1 > 4) {
      if (LLy2 < 550) {
        LLbx = 150;
        LLby = 420;

        LLx2 -= 5;
        LLy2 += 5;
      } else if (this.props.miss1 > 7 && LLy1 < 700) {
        LLy1 += dv5;
        LLy2 += dv5;
        LLby += dv5;
      }
    }
    LeftLeg(ctx, LLx1, LLy1, LLx2, LLy2, LLbx, LLby);
    ////////////////////////////////////////////////////////////                 
    if (this.props.miss1 > 5) {
      if (RLy2 < 550) {
        RLbx = 260;
        RLby = 420;

        RLx2 += 5;
        RLy2 += 5;
      } else if (this.props.miss1 > 7 && RLy1 < 700) {
        RLy1 += dv5;
        RLy2 += dv5;
        RLby += dv5;
      }
    }
    RightLeg(ctx, RLx1, RLy1, RLx2, RLy2, RLbx, RLby);
    ///////////////////////////////////////////////////
    if (this.props.miss1 === 7) {
      LeftEye.endx1 = 168;
      LeftEye.endy1 = 147;

      LeftEye.endx2 = 182;
      LeftEye.endy2 = 147;

      RightEye.endx1 = 208;
      RightEye.endy1 = 147;
      RightEye.endx2 = 222;
      RightEye.endy2 = 147;
    } else if (this.props.miss1 === 8 && LeftEye.beginy1 < 700) {

      LeftEye.beginy1 += 5;
      LeftEye.beginy2 += 5;
      LeftEye.endy1 += 5;
      LeftEye.endy2 += 5;

      RightEye.beginy1 += 5;
      RightEye.beginy2 += 5;
      RightEye.endy1 += 5;
      RightEye.endy2 += 5;
    }

    EyeLeft(ctx, LeftEye);
    EyeRight(ctx, RightEye);
    ///////////////////////////////////////////////////////////////
    if (WVy > 0) {
      WVy -= 10;
    }
    if (WHx < 250) {
      WHx += 5;
    }
    if (Ry < 100) {
      Ry += 4;
    }
    WVbx = 50;
    WVby = 300;
    WHbx = 170;
    WHby = 50;
    Wood(ctx, WVx, WVy, WVbx, WVby,
      WHx, WHy, WHbx, WHby,
      Rx, Ry);

    this.setState({
      aCv, Tx1, Ty1, Tx2, Ty2, Tbx, Tby,
      LHx1, LHy1, LHx2, LHy2, LHbx, LHby,
      RHx1, RHy1, RHx2, RHy2, RHbx, RHby,
      LLx1, LLy1, LLx2, LLy2, LLbx, LLby,
      RLx1, RLy1, RLx2, RLy2, RLbx, RLby,
      sAv, eAv,
      WVx, WVy, WVbx, WVby,
      WHx, WHy, WHbx, WHby,
      Rx, Ry, dirChange,
      dvY, HeadRight, HeadLeft, LeftEye, RightEye
    });
    /////////////////////////////////////////////////////////////////     
  }

  render() {
    return (
      <div className="canvas-container">
        <audio ref="myAudio"><source src={audio} type="audio/mpeg"></source></audio>
        <canvas className="canvas" ref="canvas" width={400} height={600} />
      </div>
    )
  }
}

export default Canvas;


