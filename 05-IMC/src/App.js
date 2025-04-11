import { SafeAreaProvider } from 'react-native-safe-area-context'

import IMC from './screens/IMC'

export default () => (
  <SafeAreaProvider>
    <IMC />
  </SafeAreaProvider>
)
