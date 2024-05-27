import express, { Router } from 'express'
import gameRoute from './game.route'

const router = express.Router()

router.use('/games', gameRoute)

export default router
