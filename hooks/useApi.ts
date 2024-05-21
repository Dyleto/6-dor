import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { getAllGames } from '../lib/api'

type Response<T> = {
  data: T
  isLoading: boolean
  refetch: () => void
}

function useApi<T>(fn: () => Promise<T>): Response<T> {
  const [data, setData] = useState([] as T)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await fn()

      setData(response)
    } catch (error) {
      Alert.alert('Error', (error as Error).message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => fetchData()

  return { data, isLoading, refetch }
}

export default useApi
