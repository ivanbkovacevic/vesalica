export  function Wood(ctx,WVx,WVy,WHx,WHy,Rx,Ry) {
    let wo=null;
   return  wo ={
       0:  ctx.lineWidth = 40,
   1:ctx.beginPath(),
   2:ctx.moveTo(0,600),// wood
   3:ctx.lineTo(WVx,WVy),
   4:null,
   5:ctx.moveTo	(0,0),
   6:ctx.lineTo(WHx,WHy),
   7:ctx.stroke(),
   8:ctx.moveTo(200,0),
   9:ctx.lineTo(Rx,Ry),
   10:ctx.lineWidth=5,
   11:ctx.stroke()
  
   }
  }


