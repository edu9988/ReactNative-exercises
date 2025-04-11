import { Alert, Text, TextInput } from 'react-native'
import { useState } from 'react'

import styles from './styles'
import Button from '../Button'

export default () => {
  const [guess, setGuess] = useState(undefined)
  const [result, setResult] = useState('')
  const [blinker, setBlinker] = useState('')
  
  const provideFeedback = () => {
    const generatedNumber = Math.floor(Math.random()*11)
    const parsedGuess = Number.parseFloat(guess)
    setBlinker(
      `Você ${parsedGuess === generatedNumber
        ? 'ganhou'
        : 'perdeu'
      }!`
    )
    setResult(
      `O número sorteado foi ${generatedNumber}`
    )
  }

  return (
    <>
      <Text style={styles.text}>
        Pense em um nº de 0 a 10
      </Text>
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={guess}
        placeholder={'Palpite'}
        placeholderTextColor={'indianred'}
        textAlign={'center'}
        onChangeText={(value) => setGuess(value)}
      />
      <Button action={provideFeedback} />
      <Text style={styles.result}>
        {blinker}
      </Text>
      <Text style={styles.result}>
        {result}
      </Text>
    </>
  )
}
