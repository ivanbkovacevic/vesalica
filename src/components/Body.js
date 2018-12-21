export function LeftHand(ctx, x1, y1, x2, y2, bx, by) {
  let lh = {};
  return lh = {
    1: ctx.beginPath(),
    2: ctx.moveTo(x1, y1),// ruka levo pocetak
    3: ctx.quadraticCurveTo(bx, by, x2, y2),
    4: ctx.stroke()
  }
}

export function RightHand(ctx, x1, y1, x2, y2, bx, by) {
  let rh = null;
  return rh = {
    1: ctx.beginPath(),
    2: ctx.moveTo(x1, y1),// ruka levo pocetak
    3: ctx.quadraticCurveTo(bx, by, x2, y2),
    4: ctx.stroke()
  }
}

export function Torzo(ctx, x1, y1, x2, y2, bx, by) {
  let to = null;
  return to = {
    1: ctx.beginPath(),// Torzo
    2: ctx.moveTo(x1, y1),
    3: ctx.quadraticCurveTo(bx, by, x2, y2),
    4: ctx.stroke(),
  }
}
export function LeftLeg(ctx, x1, y1, x2, y2, bx, by) {
  let ll = null;
  return ll = {
    1: ctx.beginPath(),
    2: ctx.moveTo(x1, y1),// noga levo pocetak
    3: ctx.quadraticCurveTo(bx, by, x2, y2),
    4: ctx.stroke()
  }
}
export function RightLeg(ctx, x1, y1, x2, y2, bx, by) {
  let rl = null;
  return rl = {
    1: ctx.beginPath(),
    2: ctx.moveTo(x1, y1),// noga desno pocetak
    3: ctx.quadraticCurveTo(bx, by, x2, y2),
    4: ctx.stroke()
  }
}

export function Head(ctx, sA, eA, ry) {
  let he = null;
  return he = {
    1: ctx.beginPath(),//glava
    2: ctx.arc(200, ry, 50, sA, eA),
    3: ctx.lineWidth = 10,
    4: ctx.fillStyle = "transparent",
    5: ctx.stroke(),
  }
}

export function EyeLeft(ctx, LeftEye) {
  let rl = null;
  return rl = {
    1: ctx.beginPath(),
    2: ctx.moveTo(LeftEye.beginx1, LeftEye.beginy1),// oko levo
    3: ctx.lineWidth = 4,
    4: ctx.lineTo(LeftEye.endx1, LeftEye.endy1),
    5: ctx.moveTo(LeftEye.beginx2, LeftEye.beginy2),// oko levo
    6: ctx.lineTo(LeftEye.endx2, LeftEye.endy2),
    7: ctx.stroke()
  }
}

export function EyeRight(ctx, RightEye) {
  let rl = null;
  return rl = {
    1: ctx.beginPath(),
    2: ctx.moveTo(RightEye.beginx1, RightEye.beginy1),// oko levo
    3: ctx.lineWidth = 4,
    4: ctx.lineTo(RightEye.endx1, RightEye.endy1),
    5: ctx.moveTo(RightEye.beginx2, RightEye.beginy2),// oko levo
    6: ctx.lineTo(RightEye.endx2, RightEye.endy2),
    7: ctx.stroke()
  }
}

export function HeadTest(ctx, HeadRight, HeadLeft) {
  let rl = null;
  return rl = {
    1: ctx.beginPath(),
    2: ctx.moveTo(HeadRight.x1, HeadRight.y1),//
    3: ctx.bezierCurveTo(HeadRight.bx1, HeadRight.by1, HeadRight.bx2, HeadRight.by2, HeadRight.x2, HeadRight.y2),
    4: ctx.stroke(),
    5: ctx.moveTo(HeadLeft.x1, HeadLeft.y1),
    6: ctx.bezierCurveTo(HeadLeft.bx1, HeadLeft.by1, HeadLeft.bx2, HeadLeft.by2, HeadLeft.x2, HeadLeft.y2),
    7: ctx.stroke(),
  }
}

export function Clear(ctx) {
  console.log('clerrrrrrrrrrrrrrrrrrr')
  return ctx.clearRect(0, 0, 400, 600);
}











