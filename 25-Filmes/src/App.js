import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Movies from './screens/Movies'
import Details from './screens/Details'

const Stack = createStackNavigator()

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Movies' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Movies' component={Movies} />
          <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
