import { SafeAreaProvider } from 'react-native-safe-area-context'

import Multiplier from './screens/Multiplier'

export default () => (
  <SafeAreaProvider>
    <Multiplier />
  </SafeAreaProvider>
)
