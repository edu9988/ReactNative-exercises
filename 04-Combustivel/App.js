import { SafeAreaProvider } from 'react-native-safe-area-context'

import Fuel from './src/screens/Fuel'

export default () => (
  <SafeAreaProvider>
    <Fuel />
  </SafeAreaProvider>
)
