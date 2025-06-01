import { drawSmiley } from './smiley.js'

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
    drawGrid(ctx, canvas.width, canvas.height)

    // drawSmiley(ctx)
  }
}

draw()

// Basic blocks that can be used
// fillRect(x, y, width, height) - Creates a filled rectangle
// strokeRect(x, y, width, height) - Creates a rectangle outline
// strokeStyle - Sets the color of the rectangle outline
// fillStyle - Sets the color of the filled rectangle
