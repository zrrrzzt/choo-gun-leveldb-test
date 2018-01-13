// Import the required libraries
const level = require('level-browserify')
const db = level('./chootest')
// Create a new level instance which saves
// to the `data/` folder.

const Gun = require('gun')
require('gun-level')
const gun = new Gun({
  level: db,
  peers: ['https://gunjs.herokuapp.com/gun'],
  localStorage: false
})
module.exports = (state, emitter) => {
  state.totalClicks = 0

  emitter.on('DOMContentLoaded', () => {
    emitter.on('clicks:add', count => {
      state.totalClicks += count
      gun.get('choostatetest').put({totalClicks: state.totalClicks})
    })

    emitter.on('title:set', title => {
      state.header = title
      gun.get('choostatetest').put({header: title})
    })

    gun.get('choostatetest').get('header').on(value => {
      console.log('updated header from gun')
      state.header = value
      emitter.emit(state.events.RENDER)
    })

    gun.get('choostatetest').get('totalClicks').on(value => {
      console.log('updated totalClicks from gun')
      state.totalClicks = value
      emitter.emit(state.events.RENDER)
    })
  })
}
