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
  const oldId = props?.route?.params?.id 

  const saveTask = async (newTitle) => {
    if( title === '' ){
      Alert.alert('Campo vazio')
    }
    else if( title === props?.route?.params?.title ){
      navigation.goBack()
    }
    else{
      try{
        const tasksValue = await AsyncStorage.getItem('tasks')
        const tasks = JSON.parse(tasksValue)

        if( oldId ){
          const newTask = {title: newTitle, id: oldId}
          await AsyncStorage.setItem('tasks', JSON.stringify(tasks.map(task => {
            return task.id === oldId? newTask : task
          })))
        }
        else{
          let newId = Math.floor(1+Math.random() * 20)
          while( tasks.some(e => e.id === newId) )
            newId += 1

          const newTask = {title: newTitle, id: newId}
          await AsyncStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))
        }
        navigation.navigate('Tasks')
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
        label="Nome da Tarefa"
        value={title}
        action={text => setTitle(text)}
      />
      <DialogBox
        cancel={() => navigation.goBack()}
        accept={() => saveTask(title)}
      />
    </SafeAreaView>
  )
}
