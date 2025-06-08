export function NonExtendableSnowMan(ctx) {
  const x1 = 350
  const y1 = 550
  const r1 = 100
  const scaleFactor = 0.8
  Body(x1 - r1 * 2, y1, r1, scaleFactor * 0.8, ctx)
  Body(x1, y1, r1, scaleFactor * 0.6, ctx)
  Body(x1 + r1 * 2, y1, r1, scaleFactor, ctx)
  // const width = 700
  // const height = 700
  // const spacing = 100
  // let x = spacing
  // while (x < width) {
  //   let y = spacing
  //   while (y < height) {
  //     body(x, y, 10, 0.7, ctx)
  //     y = y + spacing
  //   }
  //   x = x + spacing
  // }
}

export function Body(x1, y1, r1, scaleFactor, ctx) {
  ctx.beginPath()
  ctx.arc(x1, y1, r1, 0, Math.PI * 2, false)
  ctx.fillStyle = 'white'
  ctx.fill()

  const x2 = x1
  const r2 = r1 * scaleFactor
  const y2 = y1 - r1 - r2

  ctx.beginPath()
  ctx.arc(x2, y2, r2, 0, Math.PI * 2, false)
  ctx.fill()

  const x3 = x2
  const r3 = r2 * scaleFactor
  const y3 = y2 - r2 - r3

  ctx.beginPath()
  ctx.arc(x3, y3, r3, 0, Math.PI * 2, false)
  ctx.fill()
  hat(x3, y3, r3, scaleFactor, ctx)
}

function hat(xValue, yValue, radius, scaleFactor, ctx) {
  const x4 = xValue - radius
  const y4 = yValue - radius
  const w1 = radius * 2
  const h1 = radius / 2

  const y5 = y4 - radius
  const w2 = w1 * scaleFactor
  const x5 = xValue - w2 / 2
  const h2 = h1 * 2

  ctx.beginPath()
  ctx.rect(x4, y4, w1, h1)
  ctx.fillStyle = '#000'
  ctx.fill()

  ctx.beginPath()
  ctx.rect(x5, y5, w2, h2)
  ctx.fill()
  ctx.stroke()
}
