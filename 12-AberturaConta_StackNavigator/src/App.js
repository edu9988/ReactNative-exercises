import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CreateAccount from './screens/CreateAccount'
import Show from './screens/Show'

const Stack = createStackNavigator()

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Show" component={Show} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)
