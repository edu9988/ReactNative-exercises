import { Text } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './styles'
import RedButton from '../../components/RedButton'
import GreenButton from '../../components/GreenButton'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <SafeAreaView>
      <Text style={styles.title}>
        Contador de Pessoas
      </Text>
      <Text style={styles.counter}>
        {count}
      </Text>
      <GreenButton action={() => setCount(count+1)}/>
      <RedButton action={() => setCount(count>0?count-1:0)}/>
    </SafeAreaView>
  )
}
