import {
  renderFragmentShader,
  renderVertexShader,
  simulationFragmentShader,
  simulationVertexShader,
} from './shader'
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
    // drawGrid(ctx, canvas.width, canvas.height)

    // const firstCircle = {
    //   id: Math.random(),
    //   customX: 0,
    //   customY: 350,
    // }
    // const circleArray = [firstCircle]

    // canvas.addEventListener('mousedown', function (e) {
    //   if (circleArray.length === 5) {
    //     circleArray.pop()
    //   }
    //   if (circleArray.length < 5) {
    //     circleArray.push({
    //       id: Math.random(),
    //       customX: e.clientX,
    //       customY: e.clientY,
    //     })
    //     movingBall(ctx, canvas, circleArray)
    //   }
    // })

    // movingBall(ctx, canvas, circleArray)

    // circleArray.map((item, idx) => movingBall(ctx, canvas, item.customX))
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

document.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene()
  const simScene = new THREE.Scene()

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const mouse = new THREE.Vector2()
  let frame = 0

  const width = window.innerWidth * window.devicePixelRatio
  const height = window.innerHeight * window.devicePixelRatio

  const options = {
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    depthBuffer: false,
    stencilBuffer: false,
  }

  let rta = new THREE.WebGLRendererTarget(width, height, options)

  let rtb = new THREE.WebGLRendererTarget(width, height, options)

  const simMaterial = new THREE.ShaderMaterial({
    uniforms: {
      textureA: { value: null },
      mouse: { value: mouse },
      resolution: { value: new THREE.Vector2(width, height) },
      time: { value: 0 },
      frame: { value: 0 },
    },
    vertexShader: simulationVertexShader,
    fragmentShader: simulationFragmentShader,
  })

  const renderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      textureA: { value: null },
      textureB: { value: null },
    },
    vertexShader: renderVertexShader,
    fragmentShader: renderFragmentShader,
    transparent: true,
  })

  const plane = new THREE.PlaneGeometry(2, 2)
  const simQuad = new THREE.Mesh(plane, simMaterial)
  const renderQuad = new THREE.Mesh(plane, renderMaterial)

  simScene.add(simQuad)
  scene.add(renderQuad)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d', {
    alpha: true,
  })

  ctx.fillStyle = '#fb7427'
  ctx.fillRect(0, 0, width, height)

  const fontSize = Math.round(250 * window.devicePixelRatio)
  ctx.fillStyle = '#fef4b8'
  ctx.font = `bold ${fontSize}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseLine = 'middle'
  ctx.textRendering = 'geometricPrecision'
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  ctx.fillText('SoftHorizon', width / 2, height / 2)

  const textTexture = new THREE.CanvasTexture(canvas)
  textTexture.minFilter = THREE.LinearFilter
  textTexture.magFilter = THREE.LinearFilter
  textTexture.format = THREE.RGBAFormat

  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth * window.devicePixelRatio
    const newHeight = window.innerHeight * window.devicePixelRatio

    renderer.setSize(window.innerWidth, window.innerHeight)
    rta.setSize(newWidth, newHeight)
    rtb.setSize(newWidth, newHeight)
    simMaterial.uniforms.resolution.value.set(newWidth, newHeight)

    canvas.width = newWidth
    canvas.heigh = newHeight

    ctx.fillStyle = '#fb7427'
    ctx.fillRect(0, 0, newWidth, newHeight)

    const newFontSize = Math.round(250 * window.devicePixelRatio)
    ctx.fillStyle = '#fef4b8'
    ctx.font = `bold ${newFontSize}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    ctx.fillText('SoftHorizon', width / 2, height / 2)

    textTexture.needsupdate = true
  })

  renderer.domElement.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX * window.devicePixelRatio
    mouse.y = (window.innerHeight - e.clientY) * window.devicePixelRatio
  })

  renderer.domeElement.addEventListener('mouseleave', () => {
    mouse.set(0, 0)
  })

  const animate = () => {
    simMaterial.uniforms.frame.value = frame++
    simMaterial.uniforms.time.value = performance.now() / 1000

    simMaterial.uniforms.textureA.value = rta.texture
    renderer.setRenderTarget(rtb)
    renderer.render(simScene, camera)

    renderMaterial.uniforms.textureA.value = rtb.texture
    renderMaterial.uniforms.textureB.value = textTexture
    renderer.setRenderTarget(null)
    renderer.render(scene, camera)

    const temp = rta
    rta = rtb
    rtb = temp

    requestAnimationFrame(animate)
  }

  animate()
})
