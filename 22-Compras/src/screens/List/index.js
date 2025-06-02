import { FlatList }  from 'react-native'
import { useState, useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'
import Header from '../../components/Header'
import AddButton from '../../components/AddButton'
import ItemBox from '../../components/ItemBox'

export default () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getFromStorage = async () => {
      try{
        let itemsValue = await AsyncStorage.getItem('items')
        if( !itemsValue ){
          itemsValue = []
          await AsyncStorage.setItem('items', '[]')
        }
        else
          itemsValue = JSON.parse(itemsValue)
        setItems(itemsValue)
      }
      catch(error){
        console.log('useEffect error:',error)
      }
    }

    getFromStorage()
  }, [])

  const navigation = useNavigation()

  const removeItem = async (id) => {
    const filteredItems = items.filter(item => item.id !== id)
    setItems( filteredItems )
    await AsyncStorage.setItem(
      'items',
      JSON.stringify( filteredItems )
    )
  }

  const editItem = (item) => {
    navigation.navigate('Create', item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddButton action={() => navigation.navigate('Create')}/>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={item => {
          const obj = item.item
          return <ItemBox
            title={obj.title}
            amount={obj.amount}
            remove={() => removeItem(obj.id)}
            edit={() => editItem(obj)}
          />
        }}
      />
    </SafeAreaView>
  )
}
