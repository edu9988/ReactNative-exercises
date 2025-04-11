import { SafeAreaProvider } from 'react-native-safe-area-context'
import CreateAccount from './screens/CreateAccount'


export default () => (
  <SafeAreaProvider>
    <CreateAccount />
  </SafeAreaProvider>
)
