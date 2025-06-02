import { Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export default (props) => (
  <Pressable style={styles.button} onPress={props.action}>
    <AntDesign name="back" size={80} color="black" />
  </Pressable>
)
