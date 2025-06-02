import { Text, Pressable } from 'react-native'

import styles from './styles'

export default (props) => (
  <Pressable style={styles.button} onPress={props.action}>
    <Text style={styles.text}>Mais</Text>
  </Pressable>
)
