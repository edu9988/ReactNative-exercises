import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Picture from '../../components/Picture'
import NumberGame from '../../components/NumberGame'

export default () => (
  <SafeAreaView>
    <Header />
    <Picture />
    <NumberGame />
  </SafeAreaView>
)
