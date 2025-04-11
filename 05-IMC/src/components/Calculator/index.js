import { Text, TextInput } from 'react-native'
import { useState } from 'react'

import styles from './styles'
import Button from '../Button'

export default () => {
  const [weight, setWeight] = useState(undefined)
  const [height, setHeight] = useState(undefined)
  const [result, setResult] = useState(undefined)
  const [color, setColor] = useState(null)

  const provideFeedback = (weight, height) => {
    const result = weight/height/height

    let feedbackString, colorString

    if( Number.isNaN(result) ){
      feedbackString = 'Digite corretamente'
      colorString = 'red'
    }
    else if( result < 18.5 ){
      feedbackString = 'Abaixo do peso'
      colorString = 'skyblue'
    }
    else if( result < 25.0 ){
      feedbackString = 'Peso normal'
      colorString = 'limegreen'
    }
    else if( result < 30.0 ){
      feedbackString = 'Sobrepeso'
      colorString = 'khaki'
    }
    else if( result < 35.0 ){
      feedbackString = 'Obesidade grau I'
      colorString = 'darkorange'
    }
    else if( result < 40.0 ){
      feedbackString = 'Obesidade grau II'
      colorString = 'red'
    }
    else{
      colorString = 'red'
      feedbackString = 'GORDO'
    }

    setColor({
      color: colorString,
      borderBottom: '2px solid ' + colorString
    })
    setResult(feedbackString)
  }

  return (
    <>
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={weight}
        placeholder={'Peso'}
        onChangeText={(input) => setWeight(input)}
      />
      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={height}
        placeholder={'Altura'}
        onChangeText={(input) => setHeight(input)}
      />
      <Button action={() => provideFeedback(weight,height)}/>
      <Text style={[styles.result,color]}>{result}</Text>
    </>
  )
}
