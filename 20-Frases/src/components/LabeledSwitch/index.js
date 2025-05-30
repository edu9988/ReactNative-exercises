import { Switch, Text, View } from 'react-native'

import styles from './styles'

export default (props) => {
  const { value, save } = props

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children} </Text>
      <Switch value={value} onValueChange={val => save(val)} style={styles.switch}/>
    </View>
  )
}
