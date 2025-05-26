import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import styles from './styles'
import Button from '../../components/Button'
import Header from '../../components/Header'

export default () => {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('BRL')
  const [to, setTo] = useState('USD')
  const [show, setShow] = useState(false)

  const calc = (value) => {
    //https://api.frankfuter.app/latest?from=USD&to=EUR
    //return fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
      //.then((response) => response.json())
      //.then((data) => {
        //setShow(true)
        //return data.rates[to]
    //})
      //.catch((error) => {
        //console.error('catch error:',error)
        //setShow(false)
    //})
    const factor = {
      BRL: {
        BRL: 1.0,
        USD: 6.0,
        EUR: 7.0
      },
      USD: {
        BRL: 0.16,
        USD: 1.0,
        EUR: 1.2
      },
      EUR: {
        BRL: 0.14,
        USD: 0.9,
        EUR: 1.0
      }
    }
    return value*factor[from][to]
  }

  return (
    <SafeAreaView style={styles.view}>
      <Header />

      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={amount}
        placeholder={'Valor'}
        onChangeText={(input) => setAmount(input)}
      />

      <Text style={styles.text}>De:</Text>
      <Picker
        style={styles.picker}
        selectedValue={from}
        onValueChange={(value) => setFrom(value)}
      >
        <Picker.Item key={0} value={"BRL"} label="Real" />
        <Picker.Item key={1} value={"USD"} label="Dólar" />
        <Picker.Item key={2} value={"EUR"} label="Euro" />
      </Picker>

      <Text style={styles.text}>Para:</Text>
      <Picker
        style={styles.picker}
        selectedValue={to}
        onValueChange={(value) => setTo(value)}
      >
        <Picker.Item key={0} value={"BRL"} label="Real" />
        <Picker.Item key={1} value={"USD"} label="Dólar" />
        <Picker.Item key={2} value={"EUR"} label="Euro" />
      </Picker>

      <Button action={() => setShow(!show)}>
        Entrar
      </Button>

      {show &&
        <Text style={styles.show}>{amount} {from} = {calc(amount)} {to}</Text>
      }
    </SafeAreaView>
  )
}
