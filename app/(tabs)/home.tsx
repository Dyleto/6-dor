import { View, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import getAllGames from '../../lib/api'
import useApi from '../../hooks/useApi'
import GameCard from '../../components/GameCard'

const Home = (): JSX.Element => {
  const { data: games, refetch } = useApi(getAllGames)
  const [refreshing, setRefreshing] = useState(false)
  const [filteredGames, setFilteredGames] = useState(games)
  const [searchCriteria, setSearchCriteria] = useState('')

  const onRefresh = async () => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }

  useEffect(() => {
    if (games) console.log(games)
    setFilteredGames(
      games
        .filter((game) =>
          game.title.toLocaleLowerCase().includes(searchCriteria.toLocaleLowerCase() ?? '')
        )
        .sort((a, b) => a.title.localeCompare(b.title))
    )
  }, [searchCriteria, games])

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="my-6 px-4">
        <SearchInput
          placeholder="Rechercher un jeu de société"
          value={searchCriteria}
          handleChangeText={setSearchCriteria}
        />
      </View>
      <FlatList
        data={filteredGames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameCard game={item} />}
        ListEmptyComponent={() => (
          <EmptyState
            title="Aucun jeu trouvé"
            subtitle="Prévenez moi si votre jeu manque à la liste"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default Home
