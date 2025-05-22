import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Products from './screens/Products'
import Show from './screens/Show'

const Stack = createStackNavigator()

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Products' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Products' component={Products} />
        <Stack.Screen name='Show' component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)