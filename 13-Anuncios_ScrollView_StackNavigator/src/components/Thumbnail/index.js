import { Image, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default (props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={props.photo} style={styles.picture}/>
      <Text style={[styles.text,styles.name]}>{props.name}</Text>
      <Pressable style={styles.button} onPress={ () => navigation.navigate('Show', {
        name: props.name,
        photo: props.photo,
        description: props.description,
        price: props.price,
      })}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  )
}