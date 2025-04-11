import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar, View } from 'react-native'

import Jobs from './screens/Jobs'

export default () => (
  <SafeAreaProvider>
    <Jobs />
  </SafeAreaProvider>
)
