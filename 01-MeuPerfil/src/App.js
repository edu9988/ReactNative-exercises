import { SafeAreaProvider } from 'react-native-safe-area-context'

import Profile from './screens/Profile'

export default () => (
  <SafeAreaProvider>
    <Profile />
  </SafeAreaProvider>
)
