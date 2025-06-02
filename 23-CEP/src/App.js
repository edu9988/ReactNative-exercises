import { SafeAreaProvider } from 'react-native-safe-area-context'

import CEP from './screens/CEP'

export default function App() {
  return (
    <SafeAreaProvider>
      <CEP />
    </SafeAreaProvider>
  )
}
