import { SafeAreaProvider } from 'react-native-safe-area-context'

import CurrencyConverter from './screens/CurrencyConverter'

export default () => (
  <SafeAreaProvider>
    <CurrencyConverter />
  </SafeAreaProvider>
)
