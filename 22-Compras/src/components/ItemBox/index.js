import { Pressable, Text, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title} {props.amount !== '' && `(${props.amount})`}</Text>
    <Pressable style={[styles.button,{alignItems: 'flex-start'}]} onPress={props.remove}>
      <FontAwesome6 name="trash-can" size={30} color="black" />
    </Pressable>
    <Pressable style={[styles.button,{alignItems: 'flex-end'}]} onPress={props.edit}>
      <FontAwesome6 name="edit" size={30} color="black" />
    </Pressable>
  </View>
)
