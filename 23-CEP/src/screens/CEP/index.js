import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, View } from 'react-native'
import { useState }  from 'react'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import Info from '../../components/Info'
import styles from './styles'
import cepService from '../../services/cep'

export default () => {
  const [cep, setCep] = useState('')
  const [status, setStatus] = useState('idle')
  const [info, setInfo] = useState({})

  const handler = async (text) => {
    if( text.length === 0 )
      setCep( '' )
    else if( text.length !== 6 ){
      if( '0123456789'.includes( text[text.length-1] ) ){
        setCep(text)
        if( text.length === 9 ){
          try{
            const response = await cepService.get(`https://viacep.com.br/ws/${text.slice(0,5)+text.slice(6)}/json`)
            const data = await response.data
            if( data.erro ){
              setStatus('bad')
            }
            else{
              setStatus('good')
              setInfo(data)
            }
          }
          catch(error){
            setStatus('bad')
          }
        }
        else if( text.length === 8 )
          setStatus('idle')
      }
    }
    else{ /* text.length === 6 */
      if( text[5] === '-')
        setCep(text)
      else if( '0123456789'.includes(text[5]) )
        setCep( text.slice(0,5)+'-'+text[5] )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          inputMode={"numeric"}
          placeholder="Digite o CEP..."
          value={cep}
          maxLength={9}
          onChangeText={text => handler(text)}
        />
        {status ===  'good' && <AntDesign name="checksquareo" size={85} color="green" />}
        {status === 'bad' && <Entypo name="squared-cross" size={85} color="red" />}
        {status === 'idle' && <Feather name="square" size={85} color="gray" />}
      </View>

      {status === 'good' && <Info data={info}/>}
    </SafeAreaView>
  )
}
