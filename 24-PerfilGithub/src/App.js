import { SafeAreaProvider } from 'react-native-safe-area-context'

import GithubUsers from './screens/GithubUsers'

export default function App() {
  return (
    <SafeAreaProvider>
      <GithubUsers />
    </SafeAreaProvider>
  )
}
