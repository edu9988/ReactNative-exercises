import { useState, useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import Header from '../../components/Header'
import SwitchBox from '../../components/SwitchBox'
import QuoteBox from '../../components/QuoteBox'

export default () => {
  const [day, setDay] = useState(false)
  const [small, setSmall] = useState(false)

  useEffect(() => {
    const getFromStorage = async () => {
      const dayValue = await AsyncStorage.getItem('day') === 'true'
      const smallValue = await AsyncStorage.getItem('small') === 'true'
      setDay(dayValue)
      setSmall(smallValue)
    }

    getFromStorage()
  }, [])

  const saveDay = async (dayValue) => {
    setDay(dayValue)
    await AsyncStorage.setItem('day', dayValue.toString())
  }
  const saveSmall = async (smallValue) => {
    setSmall(smallValue)
    await AsyncStorage.setItem('small', smallValue.toString())
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SwitchBox
        day={day}
        saveDay={saveDay}
        small={small}
        saveSmall={saveSmall}
      />
      <QuoteBox
        day={day}
        small={small}
      />
    </SafeAreaView>
  )
}
