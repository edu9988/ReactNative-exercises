import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { useEffect, useState }  from 'react'

import Header from '../../components/Header'
import Info from '../../components/Info'
import styles from './styles'
import movieService from '../../services/movies'

export default () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await movieService.get()
        const data = await response.data
        setInfo(data)
      }
      catch(error){
        console.error('catch:',error)
      }
    }

    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Info data={info} />
    </SafeAreaView>
  )
}
