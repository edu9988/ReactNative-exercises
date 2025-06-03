import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Tasks from './screens/Tasks'
import Create from './screens/Create'

const Stack = createStackNavigator()

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tasks' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Tasks' component={Tasks} />
          <Stack.Screen name='Create' component={Create} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
