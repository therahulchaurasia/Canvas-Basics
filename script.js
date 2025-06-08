import { rectangle } from './geometricpattern.js'
import { movingBall } from './movingBall.js'
import { drawSmiley } from './smiley.js'
import { snowman } from './snowman.js'
import { treeHouse } from './treehouse.js'

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

    const firstCircle = {
      id: Math.random(),
      customX: 0,
    }
    const circleArray = [firstCircle]

    canvas.addEventListener('mousemove', function (e) {
      console.log(e)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // ctx.beginPath()
      // ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2, false)
      // ctx.stroke()
      if (circleArray.length < 5) {
        circleArray.push({
          id: Math.random(),
          customX: e.clientX,
        })
        movingBall(ctx, canvas, circleArray)
      }
    })

    movingBall(ctx, canvas, circleArray)

    // circleArray.map((item, idx) => movingBall(ctx, canvas, item.customX))

    // Draw grid for reference
    // drawGrid(ctx, canvas.width, canvas.height)
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
