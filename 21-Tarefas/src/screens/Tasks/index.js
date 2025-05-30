import { FlatList }  from 'react-native'
import { useState, useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import Header from '../../components/Header'
import AddButton from '../../components/AddButton'
import TaskBox from '../../components/TaskBox'

export default () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getFromStorage = async () => {
      try{
        let tasksValue = await AsyncStorage.getItem('tasks')
        if( !tasksValue ){
          tasksValue = []
          await AsyncStorage.setItem('tasks', '[]')
        }
        else
          tasksValue = JSON.parse(tasksValue)
        setTasks(tasksValue)
      }
      catch(error){
        console.log('useEffect error:',error)
      }
    }

    getFromStorage()
  }, [])

  const navigation = useNavigation()

  const removeTask = async (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks( filteredTasks )
    await AsyncStorage.setItem(
      'tasks',
      JSON.stringify( filteredTasks )
    )
  }

  const editTask = (task) => {
    navigation.navigate('Create', task)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddButton action={() => navigation.navigate('Create')}/>
      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={task => {
          const obj = task.item
          return <TaskBox
            title={obj.title}
            remove={() => removeTask(obj.id)}
            edit={() => editTask(obj)}
          />
        }}
      />
    </SafeAreaView>
  )
}
