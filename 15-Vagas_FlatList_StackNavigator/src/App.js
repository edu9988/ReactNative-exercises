import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Jobs from './screens/Jobs'
import Show from './screens/Show'

const Stack = createStackNavigator()

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Jobs' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Jobs' component={Jobs} />
        <Stack.Screen name='Show' component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)
