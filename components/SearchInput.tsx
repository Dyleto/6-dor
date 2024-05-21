import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { icons } from '../constants'

type Props = {
  value?: string
  placeholder?: string
  handleChangeText?: (text: string) => void
  otherStyles?: string
}

const SearchInput: React.FC<Props> = ({ value, placeholder, handleChangeText, otherStyles }) => {
  return (
    <View
      className={`border-2 border-black-200 w-full h-14 px-4 bg-black-100 rounded-xl focus:border-secondary items-center flex-row space-x-4 ${otherStyles}`}
    >
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5 h-full"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
