import { SafeAreaProvider } from 'react-native-safe-area-context'

import Quotes from './screens/Quotes'

export default () => {
  return (
    <SafeAreaProvider>
      <Quotes />
    </SafeAreaProvider>
  )
}
