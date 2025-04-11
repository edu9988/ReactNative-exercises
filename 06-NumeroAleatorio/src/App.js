import { SafeAreaProvider } from 'react-native-safe-area-context'

import RandomNumberGame from './screens/RandomNumberGame'

const App = () => (
  <SafeAreaProvider>
    <RandomNumberGame />
  </SafeAreaProvider>
)

export default App
