import React, { Component } from 'react'
import Game from './game.js'
export default class Serpent extends Component {
  render () {
    window.onload = () => {
      const myGame = new Game()

      myGame.init()

      document.onkeydown = (e) => {
        const key = e.keyCode
        let newDirection
        switch (key) {
          case 37:
            newDirection = 'left'
            break
          case 38:
            newDirection = 'up'
            break
          case 39:
            newDirection = 'right'
            break
          case 40:
            newDirection = 'down'
            break
          case 32:
            myGame.launch()

            return
          default:
            return
        }
        myGame.snakee.setDirection(newDirection)
      }
    }
    return (
      <div />
    )
  }
}
