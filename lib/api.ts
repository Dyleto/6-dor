import gamesMock from '../assets/mocks/games.json'

const games: Game[] = gamesMock

const getAllGames = async (): Promise<Game[]> => {
  try {
    return games
  } catch (error) {
    throw error as Error
  }
}

export default getAllGames
