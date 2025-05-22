import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default (props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={[styles.text,styles.name]}>{props.name}</Text>
      <Pressable style={styles.button} onPress={ () => navigation.navigate('Show', { 
        name: props.name,
        wage: props.wage,
        description: props.description,
        contact: props.contact
      }) }>
        <Text style={styles.button}>Saiba mais</Text>
      </Pressable>
    </View>
  )
}
