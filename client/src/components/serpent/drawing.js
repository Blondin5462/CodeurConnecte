export default class Drawing {
  static gameOver (ctx, centreX, centreY) {
    ctx.save()
    ctx.font = 'bold 70px sans-serif'
    ctx.fillStyle = 'lightgreen'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 5
    ctx.strokeText('Game Over', centreX, centreY - 180)
    ctx.fillText('Game Over', centreX, centreY - 180)
    ctx.font = 'bold 30px sans-serif'
    ctx.strokeText(
      'Appuyer sur la touche Espace pour rejouer',
      centreX,
      centreY - 120
    )
    ctx.fillText(
      'Appuyer sur la touche Espace pour rejouer',
      centreX,
      centreY - 120
    )
    ctx.restore()
  }

  static drawScore (ctx, centreX, centreY, score) {
    ctx.save()
    ctx.font = 'bold 200px sans-serif'
    ctx.fillStyle = 'yellow'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.strokeText(score.toString(), centreX, centreY)
    ctx.fillText(score.toString(), centreX, centreY)
    ctx.restore()
  }

  static drawSnake (ctx, blockSize, snake) {
    ctx.save()
    ctx.fillStyle = '#ff0000'
    for (const block of snake.body) {
      this.drawBlock(ctx, block, blockSize)
    }
    ctx.restore()
  }

  static drawApple (ctx, blockSize, apple) {
    ctx.save()
    ctx.fillStyle = 'orange'
    ctx.beginPath()
    const radius = blockSize / 2
    const x = apple.position[0] * blockSize + radius
    const y = apple.position[1] * blockSize + radius
    ctx.arc(x, y, radius, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()
  }

  static drawBlock (ctx, position, blockSize) {
    const [x, y] = position
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize)
  }
}
