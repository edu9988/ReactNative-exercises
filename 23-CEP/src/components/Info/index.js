import { Text, View } from 'react-native'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      CEP: {props.data.cep}
    </Text>
    <Text style={styles.text}>
      Logradouro: {props.data.logradouro}
    </Text>
    <Text style={styles.text}>
      Bairro: {props.data.bairro}
    </Text>
    <Text style={styles.text}>
      Cidade: {props.data.localidade}
    </Text>
    <Text style={styles.text}>
      Estado: {props.data.estado}
    </Text>
  </View>
)
