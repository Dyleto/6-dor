import { IGameDoc } from './game.interface'
import Game from './game.model'

export const retrieveUsers = async (): Promise<IGameDoc[]> => Game.find()
