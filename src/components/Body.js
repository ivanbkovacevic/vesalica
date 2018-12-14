export  function LeftHand(ctx,x,y) {
    let lh=null;
   return  lh ={1:ctx.beginPath(),
   2:ctx.moveTo(200,215),// ruka levo pocetak
   3:ctx.lineTo(x,y),
   4:ctx.stroke()
   }
  }

  export  function RightHand(ctx,x,y) {
    let rh=null;
   return  rh ={1:ctx.beginPath(),
   2:ctx.moveTo(200,215),// ruka levo pocetak
   3:ctx.lineTo(x,y),
   4:ctx.stroke()
   }
  }

  
  export  function Torzo(ctx,eX,eY) {
    let to=null;
   
   return  to = {1:ctx.beginPath(),// Torzo
    2:ctx.moveTo(200, 205),
    3:ctx.lineTo(eX,eY),
    4:ctx.stroke(),
   }
  }
  export  function LeftLeg(ctx,x,y) {
    let ll=null;
   return  ll ={ 1:ctx.beginPath(),
    2:ctx.moveTo(200,400),// noga levo pocetak
    3:ctx.lineTo(x,y),
    4:ctx.stroke()
   }
  }
  export  function RightLeg(ctx,x,y) {
    let rl=null;
   return  rl ={ 1:ctx.beginPath(),
    2:ctx.moveTo(200,400),// noga desno pocetak
    3:ctx.lineTo(x,y),
    4:ctx.stroke()
   }
  }

  export  function Head(ctx,sA,eA) {
    let he=null;
   return  he ={1:ctx.beginPath(),//glava
    2:ctx.arc(200,150,50, sA,eA),
    3:ctx.lineWidth = 10,
    4:ctx.fillStyle = "transparent",
    5:ctx.stroke(),
   }
  }

  export function update() {
    console.log('pera');
  }

  export function Clear(ctx){
   
    console.log('clerrrrrrrrrrrrrrrrrrr')
    return ctx.clearRect(0,0,400,600);    
   }


  
  
  
 



