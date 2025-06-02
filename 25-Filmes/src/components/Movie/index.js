import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../Button'
import styles from './styles'

export default (props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>
          {props.nome}
        </Text>
        <Button action={() => {
          navigation.navigate('Details', props)
        }}/>
      </View>
      <Image src={props.foto} style={styles.image} />
    </View>
  )
}
