import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import styles from './styles'
import Button from '../../components/Button'
import Header from '../../components/Header'
import currencyService from '../../services/currency'

export default () => {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('BRL')
  const [to, setTo] = useState('USD')
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState('')

  const calc = async () => {
    //https://api.frankfuter.app/latest?from=USD&to=EUR
    if( from !== to ){
      try{
        const data = await currencyService.get( from, to )
        setDisplay( amount*data[`${from}${to}`].ask )
        setShow(true)
      }
      catch(error){
        console.error('catch error:', error)
        setDisplay('failed')
      }
    }
    else{
        setShow(true)
        setDisplay(amount)
    }
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
        <Picker.Item key={3} value={"BTC"} label="Bitcoin" />
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

      <Button action={() => calc()}>
        Entrar
      </Button>

      {show &&
        <Text style={styles.show}>{amount} {from} = {display} {to}</Text>
      }
    </SafeAreaView>
  )
}
