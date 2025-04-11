import { TextInput, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import Button from '../../components/Button'
import styles from './styles'

export default () => {
  const [first, setFirst] = useState(undefined)
  const [second, setSecond] = useState(undefined)
  const [result, setResult] = useState(undefined)

  return (
    <SafeAreaView>
      <Text style={styles.title}>Multiplicador de números</Text>
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={first}
        onChangeText={(input) => setFirst(input)}
      />
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={second}
        onChangeText={(input) => setSecond(input)}
      />
      <Button action={() => setResult(Number.parseFloat(first) * Number.parseFloat(second))} />
      <Text style={styles.result}>Resultado: {result}</Text>
    </SafeAreaView>
  )
}
