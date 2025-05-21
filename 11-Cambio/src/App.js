import { SafeAreaProvider } from 'react-native-safe-area-context'

import styles from './assets/styles'
import CurrencyConverter from './screens/CurrencyConverter'

export default () => (
  <SafeAreaProvider style={styles.provider}>
    <CurrencyConverter />
  </SafeAreaProvider>
)
