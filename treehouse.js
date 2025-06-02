// learn how to use arc, begin path, move To , lineTo, rect and stroke

export function treeHouse(ctx) {
  ctx.strokeStyle = "#000"
  ctx.beginPath()
  ctx.moveTo(200, 500)
  ctx.lineTo(500, 500)
  ctx.lineTo(500, 200)
  ctx.lineTo(350, 125)
  ctx.lineTo(200, 200)
  ctx.lineTo(200, 500)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(350, 300, 70, 0, Math.PI * 2, false) // Draw a circle
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(200, 475, 300, 25) // Draw a rectangle
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(350, 150)
  ctx.lineTo(525, 250)
  ctx.lineTo(575, 225)
  ctx.lineTo(350, 100)
  ctx.lineTo(125, 225)
  ctx.lineTo(175, 250)

  ctx.lineTo(350, 150)
  // or ctx.closePath()
  ctx.stroke()
  // drawSmiley(ctx)

  // Time to draw the bird
  ctx.strokStyle = "#000"
  ctx.beginPath()
  ctx.arc(450, 435, 20, 0, Math.PI * 2, false)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(450, 440)
  ctx.lineTo(440, 420)
  ctx.lineTo(480, 435)
  ctx.lineTo(450, 440)
  ctx.fillStyle = "#fff"
  ctx.fill()
  // or ctx.closePath()
  // ctx.lineTo(425, 465)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(425, 400, 30, 0, Math.PI * 2, false) // Head
  ctx.fillStyle = "#fff"
  ctx.fill()
  ctx.stroke()
  // eye
  ctx.beginPath()
  ctx.arc(415, 395, 13, 0, Math.PI * 2, false)
  ctx.stroke()
  // Beak
  ctx.beginPath()
  ctx.moveTo(405, 410)
  ctx.lineTo(405, 420)
  ctx.lineTo(375, 420)
  ctx.lineTo(405, 410)
  ctx.fillStyle = "#fff"
  ctx.fill()
  // or ctx.closePath()
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(447, 455, 7, 20)
  ctx.stroke()
}
