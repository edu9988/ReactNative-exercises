import { useState }  from 'react'
import { Alert }  from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import Input from '../../components/Input'
import DialogBox from '../../components/DialogBox'
import taskService from '../../services/tasks'

export default (props) => {
  const [title, setTitle] = useState( props?.route?.params?.title ? props.route.params.title : '')
  const [description, setDescription] = useState( props?.route?.params?.description ? props.route.params.description : '')

  const oldId = props?.route?.params?.id 
  const navigation = useNavigation()

  const saveTask = async () => {
    if( title === '' ){
      Alert.alert('Campo vazio')
    }
    else if( title === props?.route?.params?.title
      && props?.route?.params?.description === description
    ){
      navigation.goBack()
    }
    else{
      const newTask = {
        title: title,
        description: description
      }
      if( oldId ){
        try{
          await taskService.put(oldId, newTask)
        }
        catch(error){
          console.error('put error:', error)
        }
      }
      else{
        try{
          await taskService.post(newTask)
        }
        catch(error){
          console.error('post error:', error)
        }
      }
      navigation.navigate('Tasks')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Título"
        value={title}
        action={text => setTitle(text)}
      />
      <Input
        label="Descrição"
        value={description}
        action={text => setDescription(text)}
      />
      <DialogBox
        cancel={() => navigation.goBack()}
        accept={() => saveTask()}
      />
    </SafeAreaView>
  )
}
