import { Text, TextInput } from 'react-native'
import { useState } from 'react'

import styles from './styles'
import Button from '../Button'

const feedback = (weight, height) => {
  const result = weight/height
  if( Number.isNaN(result) )
    return 'Digite corretamente'
  if( result < 0.7 )
    return 'Abastecer com etanol'
  if( result > 0.7 )
    return 'Abastecer com gasolina'
  return 'Tanto faz'
}

export default () => {
  const [alcohol, setAlcohol] = useState(undefined)
  const [gas, setGas] = useState(undefined)
  const [result, setResult] = useState(undefined)

  return (
    <>
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={alcohol}
        placeholder={'Preço do Álcool'}
        onChangeText={(input) => setAlcohol(input)}
      />
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={gas}
        placeholder={'Preço da Gasolina'}
        onChangeText={(input) => setGas(input)}
      />
      <Button action={() => setResult(feedback(alcohol,gas))}/>
      <Text style={styles.result}>{result}</Text>
    </>
  )
}
