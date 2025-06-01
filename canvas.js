let canvasElem = document.querySelector("canvas")

canvasElem.width = window.innerWidth
canvasElem.height = window.innerHeight

let c = canvasElem.getContext("2d")

// c.fillStyle = 'red'

// c.fillRect(300, 100, 50, 50)
// c.fillRect(350, 100, 50, 50)

// // Line
// c.beginPath() // Very important to differentiate between shapes other stuff
// c.moveTo(200, 100)
// c.lineTo(300, 100)
// c.lineTo(350, 530)
// c.strokeStyle = '#fa34a3'
// c.stroke()

// // // Arc
// // c.beginPath() // If I don't use it over here, the line above will be automatically connected to the circle.
// // c.arc(300, 300, 50, 0, 360, false)
// // c.strokeStyle = 'blue'
// // c.stroke()

// // Using for loops to make crazy circles

// for (let i = 0; i < 200; i++) {
//   const x = Math.random() * window.innerWidth
//   const y = Math.random() * window.innerHeight

//   c.beginPath()
//   c.arc(x, y, 50, 0, Math.PI * 2, false)
//   c.strokeStyle = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
//     Math.random() * 255,
//   )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random())})`
//   c.stroke()
// }

// for (let i = 0; i < 200; i++) {
//   const x = Math.random() * window.innerWidth
//   const y = Math.random() * window.innerHeight
//   c.fillStyle = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
//     Math.random() * 255,
//   )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random())})`
//   c.fillRect(x, y, 30, 30)
// }

//* This code allows us to create a instance of an arc, but I cannot fully comprehend this because of the 'this' keyword
function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)}, 1)`

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = `rgba(255,0,0,0.5)`
    c.stroke()
    // * Trigger Warning * //
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
    this.draw()
  }
}

let circle = new Circle(200, 200, 3, 3, 30)

let circleArray = []
for (let i = 0; i < 300; i++) {
  let radius = 50
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerHeight - radius * 2) + radius
  // Velocity is basically the value that we add to the variable to make the element move
  let dx = Math.random() - 0.5 // x velocity or something
  let dy = Math.random() - 0.5

  circleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
  requestAnimationFrame(animate)
  //* The canvas keeps drawing the circle one after the other with each increment, but the clearRect makes sure that it clears the screen before the next one is drawn. *//
  c.clearRect(0, 0, innerWidth, innerHeight)

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }

  // circle.update()
  // c.beginPath()
  // c.arc(x, y, radius, 0, Math.PI * 2, false)
  // // c.strokeStyle = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
  // //   Math.random() * 255,
  // // )}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random())})`
  // c.strokeStyle = `rgba(255,0,0,0.5)`
  // c.stroke()

  //* Both the if conditions keep the arc from going outside the screen *//
  // if (x + radius > innerWidth || x - radius < 0) {
  //   dx = -dx
  // }

  // if (y + radius > innerHeight || y - radius < 0) {
  //   dy = -dy
  // }
  //* We add the values to keep the arc moving *//
  // x += dx
  // y += dy
}

//* We call this function once over here and the first line requestAnimationFrame calls the function recursively until the end of time *//
animate()
