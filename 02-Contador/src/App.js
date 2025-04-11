import { SafeAreaProvider } from 'react-native-safe-area-context'

import Counter from './screens/Counter'

export default () => (
  <SafeAreaProvider>
    <Counter />
  </SafeAreaProvider>
)
