import { SafeAreaProvider } from 'react-native-safe-area-context'

import Products from './screens/Products'

export default () => (
  <SafeAreaProvider>
    <Products />
  </SafeAreaProvider>
)
