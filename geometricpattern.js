export function rectangle(ctx) {
  ctx.beginPath()
  ctx.rect(200, 200, 250, 250)
  ctx.lineWidth = 25
  ctx.strokeStyle = "blue"
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(225, 225, 200, 200)
  ctx.lineWidth = 25
  ctx.strokeStyle = "white"
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(250, 250, 150, 150)
  ctx.lineWidth = 25
  ctx.strokeStyle = "blue"
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(275, 275, 100, 100)
  ctx.lineWidth = 25
  ctx.strokeStyle = "white"
  ctx.fillStyle = "blue"
  ctx.fill()
  ctx.stroke()
}
