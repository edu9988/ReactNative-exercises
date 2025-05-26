import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { View } from 'react-native'

import Header from './components/Header'
import CurrencyConverter from './screens/CurrencyConverter'

const Tab = createBottomTabNavigator()

export default () => (
  <SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="USD"
          screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              height: 65
            },
            tabBarShowLabel: false,
            tabBarItemStyle: {
              padding: 0,
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ color }) => (
              <View style={{
                width: 60,
                height: 60,
                marginVertical: 'auto',
              }}>
                { route.name === 'USD' && <Ionicons name="logo-usd" size={50} color={color}/>}
                { route.name === 'EUR' && <FontAwesome5 name="euro-sign" size={50} color={color}/>}
                { route.name === 'BTC' && <FontAwesome6 name="bitcoin" size={50} color={color}/>}
              </View>
            )
          })}
        >
          <Tab.Screen name="USD" component={CurrencyConverter} initialParams={{ to: "USD" }}/>
          <Tab.Screen name="EUR" component={CurrencyConverter} initialParams={{ to: "EUR" }}/>
          <Tab.Screen name="BTC" component={CurrencyConverter} initialParams={{ to: "BTC" }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)
