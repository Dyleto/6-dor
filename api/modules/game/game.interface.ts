import { Document } from 'mongoose'

export interface IGame {
  title: string
  thumbnail: string
  minPlayers: number
  maxPlayers?: number
  time: number
}

export interface IGameDoc extends IGame, Document {}
