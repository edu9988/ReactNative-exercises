import { Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import styles from './styles'
import Button from '../../components/Button'

export default (props) => {
  const [amount, setAmount] = useState('')
  const [show, setShow] = useState(false)
  const to = props.route.params.to

  const calc = (value) => {
    const factor = {
      USD: 0.18,
      EUR: 0.15,
      BTC: 0.00000161
    }
    return to === 'BTC'
      ? (value*factor[to])
      : (value*factor[to]).toFixed(2)
  }

  return (
    <SafeAreaView style={styles.view}>

      <TextInput
        style={styles.input}
        inputMode="numeric"
        value={amount}
        placeholder={'Digite o valor em R$'}
        onChangeText={(input) => setAmount(input)}
      />

      <Button action={() => setShow(!show)}>
        Converter para {to}
      </Button>

      {show &&
        <Text style={styles.show}>{Number.parseFloat(amount).toFixed(2)} BRL = {calc(amount)} {to}</Text>
      }
    </SafeAreaView>
  )
}
