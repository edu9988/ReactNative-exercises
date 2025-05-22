import { Text, View } from 'react-native'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Text style={[styles.text,styles.name]}>{props.name}</Text>
    <Text style={styles.text}>Salário: {props.wage}</Text>
    <Text style={styles.text}>Descrição: {props.description}</Text>
    <Text style={styles.text}>Contato: {props.contact}</Text>
  </View>
)
