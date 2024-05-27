import catchAsync from '../../utils/catchAsync'
import { Request, Response } from 'express'
import * as gameService from './game.service'

export const getGames = catchAsync(async (req: Request, res: Response) => {
  const games = await gameService.retrieveUsers()
  res.send(games)
})
