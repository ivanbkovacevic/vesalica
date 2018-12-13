export  function LeftHand(ctx) {
    let lh=null;
   return  lh ={1:ctx.beginPath(),
   2:ctx.moveTo(200,215),// ruka levo pocetak
   3:ctx.lineTo(50,350),
   4:ctx.stroke()
   }
  }

  export  function RightHand(ctx) {
    let rh=null;
   return  rh ={1:ctx.beginPath(),
   2:ctx.moveTo(200,215),// ruka levo pocetak
   3:ctx.lineTo(350,350),
   4:ctx.stroke()
   }
  }

  
  export  function Torzo(ctx) {
    let to=null;
    let x2=200;
    let y2=505;
   return  to = {1:ctx.beginPath(),// Torzo
    2:ctx.moveTo(200, 205),
    3:ctx.lineTo(x2,y2),
    4:ctx.stroke(),
   }
  }
  export  function LeftLeg(ctx) {
    let ll=null;
   return  ll ={ 1:ctx.beginPath(),
    2:ctx.moveTo(200,400),// noga levo pocetak
    3:ctx.lineTo(50,550),
    4:ctx.stroke()
   }
  }
  export  function RightLeg(ctx) {
    let rl=null;
   return  rl ={ 1:ctx.beginPath(),
    2:ctx.moveTo(200,400),// noga desno pocetak
    3:ctx.lineTo(350,550),
    4:ctx.stroke()
   }
  }

  export  function Head(ctx) {
    let he=null;
   return  he ={1:ctx.beginPath(),//glava
    2:ctx.arc(200,150,50,0,2*Math.PI),
    3:ctx.lineWidth = 10,
    4:ctx.fillStyle = "transparent",
    5:ctx.stroke(),
   }
  }

  export function update() {
    console.log('pera');
  }

   function Animate(ctx){
     requestAnimationFrame(Animate)
    console.log('dvsdws')
    let he=null;
     he ={1:ctx.beginPath(),//glava
    2:ctx.arc(300,150,50,0,2*Math.PI),
    3:ctx.lineWidth = 10,
    4:ctx.fillStyle = "transparent",
    5:ctx.stroke(),
     }
  }

  export  function Practise(ctx) {
    let he=null;
   return  he ={1:ctx.beginPath(),//glava
    2:ctx.arc(300,150,50,0,2*Math.PI),
    3:ctx.lineWidth = 10,
    4:ctx.fillStyle = "transparent",
    5:ctx.stroke(),
   }
  }


  
  
  
 



