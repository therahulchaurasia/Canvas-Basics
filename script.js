import { Body } from './snowman.js'

function drawGrid(ctx, width, height, step = 25) {
  ctx.strokeStyle = '#ddd'
  ctx.font = '10px sans-serif'
  for (let x = 0; x <= width; x += step) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
    ctx.fillText(x, x + 2, 10)
  }
  for (let y = 0; y <= height; y += step) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
    ctx.fillText(y, 2, y - 2)
  }
}

function draw() {
  const canvas = document.getElementById('myCanvas')
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    // Draw grid for reference
    const minX = 225
    const rangeX = 50
    let p = 0

    canvas.addEventListener('mousemove', function (e) {
      p = e.offsetX / canvas.width
    })

    const bowTie = new Image()
    bowTie.src = 'bowTie.png'
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid(ctx, canvas.width, canvas.height)
      Body(250, 650, 130, 0.8, ctx)
      // p = p + 0.02
      // if (p > 1) {
      //   p = 0
      // }

      const leftEyeX = minX + rangeX * p - 25
      const rightEyeX = minX + rangeX * p + 25
      ctx.beginPath()

      ctx.arc(leftEyeX, 225, 15, 0, Math.PI * 2, false)
      ctx.arc(rightEyeX, 225, 15, 0, Math.PI * 2, false)
      ctx.fillStyle = 'black'
      ctx.fill()
      ctx.drawImage(bowTie, 200, 290, 100, 50)
      requestAnimationFrame(animate)
      ctx.beginPath()
      ctx.font = '40px Comic Sans MS'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('Merry', 250, 375)
      ctx.fillText('Christmas', 250, 425)
      // ctx.arc(250, 375, 5, 0, Math.PI * 2)
      // ctx.fill()
    }
    animate()
  }
}

draw()

// Basic blocks that can be used
// fillRect(x, y, width, height) - Creates a filled rectangle
// strokeRect(x, y, width, height) - Creates a rectangle outline
// clearRect(x, y, width, height) - Clears a rectangle area
// strokeStyle - Sets the color of the rectangle outline
// fillStyle - Sets the color of the filled rectangle
// beginPath() - Starts a new path
// closePath() - Closes the current path
// moveTo(x, y) - Moves the starting point of a new sub-path
// lineTo(x, y) - Adds a new point and connects it to the last point
// fill() - Fills the current path with the current fill style

// There's more
// arc(x, y, radius, startAngle, endAngle, anticlockwise) - Draws an arc
// arcTo(x1, y1, x2, y2, radius) - Draws an arc between two points
// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) - Draws a cubic Bezier curve
// quadraticCurveTo(cpx, cpy, x, y) - Draws a quadratic Bezier curve

// Color related
// strokeStyle=Changes the color of a stroke
// fillStyle=Changes the color of fill
