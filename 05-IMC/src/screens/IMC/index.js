import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Picture from '../../components/Picture'
import Calculator from '../../components/Calculator'

export default () => (
  <SafeAreaView>
    <Header />
    <Picture />
    <Calculator />
  </SafeAreaView>
)

