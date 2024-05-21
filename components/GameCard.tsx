import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
  game: Game
}

const GameCard: React.FC<Props> = ({ game: { title, thumbnail } }) => {
  return (
    <View className="flex-col items-center px-4 mb-14 flex-1 max-w-[50vw]">
      <View className="justify-center items-center w-full">
        <Image
          source={{ uri: thumbnail }}
          className="w-full h-[150px] rounded-lg"
          resizeMode="contain"
        />
        <Text className="text-base text-white font-psemibold text-center mt-3" numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  )
}

export default GameCard
