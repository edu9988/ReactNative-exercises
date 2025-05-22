import { Image, Text, View } from 'react-native'

import styles from './styles'

export default (props) => {

  return (
    <View style={styles.container}>
      <Image source={props.photo} style={styles.picture}/>
      <Text style={[styles.text,styles.name]}>{props.name}</Text>
      <Text style={[styles.text,styles.price]}>{props.price}</Text>
      <Text style={styles.text}>{props.description}</Text>
    </View>
  )
}
