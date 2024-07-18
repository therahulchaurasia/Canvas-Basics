let canvasElem = document.querySelector("canvas")

canvasElem.width = window.innerWidth
canvasElem.height = window.innerHeight

let c = canvasElem.getContext("2d")

let coordinates = {
  x: undefined,
  y: undefined,
}

const maxRadius = 40

window.addEventListener("mousemove", function (event) {
  coordinates.x = event.x
  coordinates.y = event.y
})

window.addEventListener("resize", function (event) {
  init()
  canvasElem.width = window.innerWidth
  canvasElem.height = window.innerHeight
})

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, 1)`
  this.minRadius = radius

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = `rgba(255,0,0,0.5)`
    c.stroke()
    c.fillStyle = this.color
    c.fill()
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    if (
      coordinates.x - this.x < 50 &&
      coordinates.x - this.x > -50 &&
      coordinates.y - this.y < 50 &&
      coordinates.y - this.y > -50
    ) {
      if (this.radius < maxRadius) this.radius += 1
    } else if (this.radius >= this.minRadius) {
      // or plain radius that is being passed through params
      this.radius -= 1
    }

    this.draw()
  }
}

// let circle = new Circle(200, 200, 3, 3, 30)
let circleArray = []

function init() {
  circleArray = [   ]
  for (let i = 0; i < 800; i++) {
    let radius = Math.random() * 10 + 1
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius

    let dx = Math.random() - 0.5
    let dy = Math.random() - 0.5

    circleArray.push(new Circle(x, y, dx, dy, radius))
  }
}

function animate() {
  requestAnimationFrame(animate)

  c.clearRect(0, 0, innerWidth, innerHeight)

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
}

init()
animate()
