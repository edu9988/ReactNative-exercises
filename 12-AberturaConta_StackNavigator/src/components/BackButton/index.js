import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default () => {
  const navigation = useNavigation()

  return (
    <Pressable style={styles.button} onPress={ () => navigation.goBack() } >
      <AntDesign name="back" size={48} color="black" />
    </Pressable>
  )
}