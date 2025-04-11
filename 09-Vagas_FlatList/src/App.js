import { SafeAreaProvider } from 'react-native-safe-area-context'

import Jobs from './screens/Jobs'

export default () => (
  <SafeAreaProvider>
    <Jobs />
  </SafeAreaProvider>
)
