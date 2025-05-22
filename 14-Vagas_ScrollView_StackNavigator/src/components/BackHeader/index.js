import { Text, View } from 'react-native'

import BackButton from '../BackButton'
import styles from './styles'

export default () => (
  <View style={styles.container}>
    <BackButton />
    <Text style={styles.text}>Detalhes</Text>
  </View>
)
