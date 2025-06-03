import { FlatList }  from 'react-native'
import { useState, useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import Header from '../../components/Header'
import AddButton from '../../components/AddButton'
import TaskBox from '../../components/TaskBox'
import taskService from '../../services/tasks'

export default () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getFromServer = async () => {
      try{
        const remoteTasks = await taskService.getAll()
        setTasks(remoteTasks)
      }
      catch(error){
        console.log('useEffect error:',error)
      }
    }

    getFromServer()
  }, [])

  const navigation = useNavigation()

  const removeTask = async (id) => {
    try{
      await taskService.deleteById(id)
      setTasks( tasks.filter(task => task.id !== id) )
    }
    catch(error){
      console.error('delete error:', error)
    }
  }

  const editTask = (task) => {
    navigation.navigate('Create', task)
  }

  const finishTask = async (id) => {
    try{
      await taskService.patch(id)
      setTasks( tasks.map(task => {
        return task.id !== id
          ? task
          : { ...task, finished: true }
      }))
    }
    catch(error){
      console.error('patch error:', error)
    }
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
            description={obj.description}
            finished={obj.finished}
            remove={() => removeTask(obj.id)}
            edit={() => editTask(obj)}
            markAsDone={() => finishTask(obj.id)}
          />
        }}
      />
    </SafeAreaView>
  )
}
