import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  minPlayers: {
    type: Number,
    required: true,
  },
  maxPlayers: {
    type: Number,
  },
  time: {
    type: Number,
    required: true,
  },
})

const Game = mongoose.model('Game', gameSchema)

export default Game
