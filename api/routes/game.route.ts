import express from 'express'
import { gameController } from '../modules/game'

const router = express.Router()

router.route('/').get(gameController.getGames)

export default router
