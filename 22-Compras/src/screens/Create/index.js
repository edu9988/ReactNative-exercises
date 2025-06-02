import { useState }  from 'react'
import { Alert }  from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import Input from '../../components/Input'
import DialogBox from '../../components/DialogBox'

export default (props) => {
  const [title, setTitle] = useState( props?.route?.params?.title ? props.route.params.title : '')
  const [amount, setAmount] = useState( props?.route?.params?.amount ? props.route.params.amount : '')
  const oldId = props?.route?.params?.id 

  const saveItem = async (newItem) => {
    if( newItem.title === '' ){
      Alert.alert('Campo vazio')
    }
    else if(
      newItem.title === props?.route?.params?.title 
      && newItem.amount === props?.route?.params?.amount ){
      navigation.goBack()
    }
    else{
      try{
        const itemsValue = await AsyncStorage.getItem('items')
        const items = JSON.parse(itemsValue)

        if( oldId ){
          const newObj = {title: newItem.title, amount:newItem.amount, id: oldId}
          await AsyncStorage.setItem('items', JSON.stringify(items.map(task => {
            return task.id === oldId? newObj : task
          })))
        }
        else{
          let newId = Math.floor(1+Math.random() * 20)
          while( items.some(e => e.id === newId) )
            newId += 1

          const newObj = {title: newItem.title, amount: newItem.amount, id: newId}
          await AsyncStorage.setItem('items', JSON.stringify([...items, newObj]))
        }
        navigation.navigate('List')
      }
      catch(error){
        console.log('what happened?',error)
      }
    }
  }

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Mercadoria"
        value={title}
        action={text => setTitle(text)}
      />
      <Input
        label="Quantidade"
        value={amount}
        action={text => setAmount(text)}
      />
      <DialogBox
        cancel={() => navigation.goBack()}
        accept={() => saveItem({title, amount})}
      />
    </SafeAreaView>
  )
}
