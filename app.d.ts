/// <reference types="nativewind/types" />

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

interface Game {
  id: number
  title: string
  thumbnail: string
  minPlayers: number
  maxPlayers?: number
  time: number
}
