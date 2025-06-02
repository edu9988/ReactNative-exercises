import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text } from 'react-native'

import styles from './styles'
import Header from '../../components/Header'

export default (props) => {
  const navigation = useNavigation()
  const params = props.route.params

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>{params.nome} - Sinopse</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.synopsis}>{params.sinopse}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
