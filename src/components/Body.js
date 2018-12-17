export  function LeftHand(ctx,x1,y1,x2,y2) {
    let lh=null;
   return  lh ={1:ctx.beginPath(),
   2:ctx.moveTo(x1,y1),// ruka levo pocetak
   3:ctx.lineTo(x2,y2),
   4:ctx.stroke()
   }
  }

  export  function RightHand(ctx,x1,y1,x2,y2) {
    let rh=null;
   return  rh ={1:ctx.beginPath(),
   2:ctx.moveTo(x1,y1),// ruka levo pocetak
   3:ctx.lineTo(x2,y2),
   4:ctx.stroke()
   }
  }

  export  function Torzo(ctx,x1,y1,x2,y2) {
    let to=null;
   return  to = {1:ctx.beginPath(),// Torzo
    2:ctx.moveTo(x1,y1),
    3:ctx.lineTo(x2,y2),
    4:ctx.stroke(),
   }
  }
  export  function LeftLeg(ctx,x1,y1,x2,y2) {
    let ll=null;
   return  ll ={ 1:ctx.beginPath(),
    2:ctx.moveTo(x1,y1),// noga levo pocetak
    3:ctx.lineTo(x2,y2),
    4:ctx.stroke()
   }
  }
  export  function RightLeg(ctx,x1,y1,x2,y2) {
    let rl=null;
   return  rl ={ 1:ctx.beginPath(),
    2:ctx.moveTo(x1,y1),// noga desno pocetak
    3:ctx.lineTo(x2,y2),
    4:ctx.stroke()
   }
  }

  export  function Head(ctx,sA,eA,ry) {
    let he=null;
   return  he ={1:ctx.beginPath(),//glava
    2:ctx.arc(200,ry,50, sA,eA),
    3:ctx.lineWidth = 10,
    4:ctx.fillStyle = "transparent",
    5:ctx.stroke(),
   }
  }

  export function Clear(ctx){
    console.log('clerrrrrrrrrrrrrrrrrrr')
    return ctx.clearRect(0,0,400,600);    
   }




  
  
  
 



