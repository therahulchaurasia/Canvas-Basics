export function movingBall(ctx, canvas, circleArray) {
  const minX = 0
  let rangeX = 500
  let rangeY = 500
  let p = 0
  let sign = 1
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    circleArray.map((item, idx) => {
      const circleX = item.customX + rangeX * p
      const circleY = item.customY + rangeY * p
      p = p + 0.02 * sign
      // console.log(circleX, p)
      if (p > 1) {
        sign = -1
      }
      if (p < 0) {
        sign = 1
      }
      ctx.beginPath()
      ctx.arc(circleX, circleY, 20, 0, Math.PI * 2, false)
      ctx.stroke()
    })
    requestAnimationFrame(animate)
  }

  animate()
}
