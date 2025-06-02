import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, TextInput, View } from 'react-native'
import { useState }  from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import Info from '../../components/Info'
import styles from './styles'
import userService from '../../services/user'

export default () => {
  const [user, setUser] = useState('')
  const [status, setStatus] = useState('idle')
  const [info, setInfo] = useState({})

  const handler = async (text) => {
    if( text.length === 0 ){
      setUser( '' )
      setStatus('idle')
    }
    else{ /* text.length > 0 */
      setStatus('idle')
      setUser(text)
      try{
        const response = await userService.get(`${text}`)
        const data = await response.data
        if( data.status === '404' ){
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
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Image src={status === 'good'? info.avatar_url : ''} style={styles.image} />

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          inputMode={"numeric"}
          placeholder="Usuário"
          value={user}
          maxLength={9}
          onChangeText={text => handler(text)}
        />
        {status ===  'good' && <AntDesign name="checksquareo" size={85} color="green" />}
        {status === 'bad' && <AntDesign name="closesquareo" size={85} color="red" />}
        {status === 'idle' && <Feather name="square" size={85} color="gray" />}
      </View>

      {status === 'good' && <Info data={info}/>}
    </SafeAreaView>
  )
}
