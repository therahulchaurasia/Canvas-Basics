export function drawSmiley(ctx) {
  ctx.fillRect(250, 150, 25, 25)
  ctx.fillRect(275, 150, 25, 25)
  ctx.fillRect(300, 150, 25, 25)
  ctx.fillRect(325, 150, 25, 25)
  ctx.fillRect(350, 150, 25, 25)
  ctx.fillRect(375, 150, 25, 25)
  ctx.fillRect(400, 150, 25, 25)
  ctx.fillRect(425, 150, 25, 25)
  ctx.fillRect(450, 150, 25, 25)

  ctx.fillRect(475, 175, 25, 25)
  ctx.fillRect(500, 175, 25, 25)

  ctx.fillRect(525, 200, 25, 25)

  ctx.fillRect(550, 225, 25, 25)

  ctx.fillRect(575, 250, 25, 25)
  ctx.fillRect(575, 275, 25, 25)

  ctx.fillRect(600, 300, 25, 25)
  ctx.fillRect(600, 325, 25, 25)
  ctx.fillRect(600, 350, 25, 25)
  ctx.fillRect(600, 375, 25, 25)
  ctx.fillRect(600, 400, 25, 25)
  ctx.fillRect(600, 425, 25, 25)
  ctx.fillRect(600, 450, 25, 25)
  ctx.fillRect(600, 475, 25, 25)
  ctx.fillRect(600, 500, 25, 25)

  ctx.fillRect(575, 525, 25, 25)
  ctx.fillRect(575, 550, 25, 25)

  ctx.fillRect(550, 575, 25, 25)

  ctx.fillRect(525, 600, 25, 25)

  ctx.fillRect(500, 625, 25, 25)
  ctx.fillRect(475, 625, 25, 25)

  ctx.fillRect(450, 650, 25, 25)
  ctx.fillRect(425, 650, 25, 25)
  ctx.fillRect(400, 650, 25, 25)
  ctx.fillRect(375, 650, 25, 25)
  ctx.fillRect(350, 650, 25, 25)
  ctx.fillRect(325, 650, 25, 25)
  ctx.fillRect(300, 650, 25, 25)
  ctx.fillRect(275, 650, 25, 25)
  ctx.fillRect(250, 650, 25, 25)

  ctx.fillRect(225, 625, 25, 25)
  ctx.fillRect(200, 625, 25, 25)

  ctx.fillRect(175, 600, 25, 25)

  ctx.fillRect(150, 575, 25, 25)

  ctx.fillRect(125, 550, 25, 25)
  ctx.fillRect(125, 525, 25, 25)

  ctx.fillRect(100, 500, 25, 25)
  ctx.fillRect(100, 475, 25, 25)
  ctx.fillRect(100, 450, 25, 25)
  ctx.fillRect(100, 425, 25, 25)
  ctx.fillRect(100, 400, 25, 25)
  ctx.fillRect(100, 375, 25, 25)
  ctx.fillRect(100, 350, 25, 25)
  ctx.fillRect(100, 325, 25, 25)
  ctx.fillRect(100, 300, 25, 25)

  ctx.fillRect(125, 275, 25, 25)
  ctx.fillRect(125, 250, 25, 25)

  ctx.fillRect(150, 225, 25, 25)

  ctx.fillRect(175, 200, 25, 25)

  ctx.fillRect(200, 175, 25, 25)
  ctx.fillRect(225, 175, 25, 25)

  ctx.fillStyle = '#ffde34'

  // const rowCounts = [9, 13, 15, 17, 17]
  // for (let row = 0; row < rowCounts.length; row++) {
  // 	const count = rowCounts[row]
  // 	for (let i = 0; i < count; i++) {
  // 		ctx.fillRect(250 + i * 25, 150 + row * 25, 25, 25)
  // 	}
  // }
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(250 + i * 25, 175, 25, 25)
  }
  for (let i = 0; i < 13; i++) {
    ctx.fillRect(200 + i * 25, 200, 25, 25)
  }
  for (let i = 0; i < 15; i++) {
    ctx.fillRect(175 + i * 25, 225, 25, 25)
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 17; j++) {
      ctx.fillRect(150 + j * 25, 250 + i * 25, 25, 25)
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 19; j++) {
      ctx.fillRect(125 + j * 25, 300 + i * 25, 25, 25)
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 17; j++) {
      ctx.fillRect(150 + j * 25, 525 + i * 25, 25, 25)
    }
  }

  for (let i = 0; i < 15; i++) {
    ctx.fillRect(175 + i * 25, 575, 25, 25)
  }

  for (let i = 0; i < 13; i++) {
    ctx.fillRect(200 + i * 25, 600, 25, 25)
  }

  for (let i = 0; i < 9; i++) {
    ctx.fillRect(250 + i * 25, 625, 25, 25)
  }

  ctx.fillStyle = '#000'
  // Eyebrow 1
  ctx.fillRect(300, 200, 25, 25)
  ctx.fillRect(275, 200, 25, 25)
  ctx.fillRect(250, 200, 25, 25)

  ctx.fillRect(225, 225, 25, 25)

  // Eyebrow 2
  ctx.fillRect(400, 200, 25, 25)
  ctx.fillRect(425, 200, 25, 25)
  ctx.fillRect(450, 200, 25, 25)

  ctx.fillRect(475, 225, 25, 25)

  ctx.fillStyle = 'white'
  // Eye 1
  ctx.fillRect(300, 275, 25, 25)
  ctx.fillRect(275, 275, 25, 25)
  ctx.fillRect(250, 275, 25, 25)

  ctx.fillRect(225, 300, 25, 25)
  ctx.fillRect(250, 300, 25, 25)
  ctx.fillRect(275, 300, 25, 25)
  ctx.fillRect(300, 300, 25, 25)
  ctx.fillRect(325, 300, 25, 25)

  ctx.fillRect(225, 325, 25, 25)
  ctx.fillRect(250, 325, 25, 25)
  ctx.fillRect(275, 325, 25, 25)
  ctx.fillRect(300, 325, 25, 25)
  ctx.fillRect(325, 325, 25, 25)

  ctx.fillRect(225, 350, 25, 25)
  ctx.fillRect(250, 350, 25, 25)
  ctx.fillRect(275, 350, 25, 25)
  ctx.fillRect(300, 350, 25, 25)
  ctx.fillRect(325, 350, 25, 25)

  ctx.fillRect(225, 375, 25, 25)
  ctx.fillRect(250, 375, 25, 25)
  ctx.fillRect(275, 375, 25, 25)
  ctx.fillRect(300, 375, 25, 25)
  ctx.fillRect(325, 375, 25, 25)

  ctx.fillRect(300, 400, 25, 25)
  ctx.fillRect(275, 400, 25, 25)
  ctx.fillRect(250, 400, 25, 25)

  // Eye 2
  ctx.fillRect(400, 275, 25, 25)
  ctx.fillRect(425, 275, 25, 25)
  ctx.fillRect(450, 275, 25, 25)

  ctx.fillRect(375, 300, 25, 25)
  ctx.fillRect(400, 300, 25, 25)
  ctx.fillRect(425, 300, 25, 25)
  ctx.fillRect(450, 300, 25, 25)
  ctx.fillRect(475, 300, 25, 25)

  ctx.fillRect(375, 325, 25, 25)
  ctx.fillRect(400, 325, 25, 25)
  ctx.fillRect(425, 325, 25, 25)
  ctx.fillRect(450, 325, 25, 25)
  ctx.fillRect(475, 325, 25, 25)

  ctx.fillRect(375, 350, 25, 25)
  ctx.fillRect(400, 350, 25, 25)
  ctx.fillRect(425, 350, 25, 25)
  ctx.fillRect(450, 350, 25, 25)
  ctx.fillRect(475, 350, 25, 25)

  ctx.fillRect(375, 375, 25, 25)
  ctx.fillRect(400, 375, 25, 25)
  ctx.fillRect(425, 375, 25, 25)
  ctx.fillRect(450, 375, 25, 25)
  ctx.fillRect(475, 375, 25, 25)

  ctx.fillRect(400, 400, 25, 25)
  ctx.fillRect(425, 400, 25, 25)
  ctx.fillRect(450, 400, 25, 25)

  ctx.fillStyle = 'black'
  // Left Pupil
  ctx.fillRect(300, 350, 25, 25)
  ctx.fillRect(300, 375, 25, 25)

  // Right Pupil
  ctx.fillRect(400, 350, 25, 25)
  ctx.fillRect(400, 375, 25, 25)

  ctx.fillRect(225, 500, 25, 25)
  ctx.fillRect(250, 525, 25, 25)

  ctx.fillRect(275, 550, 25, 25)
  ctx.fillRect(300, 550, 25, 25)
  ctx.fillRect(325, 550, 25, 25)
  ctx.fillRect(350, 550, 25, 25)
  ctx.fillRect(375, 550, 25, 25)
  ctx.fillRect(400, 550, 25, 25)
  ctx.fillRect(425, 550, 25, 25)

  ctx.fillRect(450, 525, 25, 25)
  ctx.fillRect(475, 500, 25, 25)
}
