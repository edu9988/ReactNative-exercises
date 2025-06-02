import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import List from './screens/List'
import Create from './screens/Create'

const Stack = createStackNavigator()

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='List' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='List' component={List} />
          <Stack.Screen name='Create' component={Create} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
