import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'
import { View } from 'react-native'

import Personal from './screens/Personal'
import Education from './screens/Education'
import Experience from './screens/Experience'

const Tab = createBottomTabNavigator()

const iconNames = {
  Personal: "person-circle-outline",
  Education: "",
  Experience: "work"
}

export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Personal"
        screenOptions={ ({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 100
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
              { route.name === 'Personal' && <Ionicons name="person" size={50} color={color}/>}
              { route.name === 'Education' && <SimpleLineIcons name="graduation" size={50} color={color}/>}
              { route.name === 'Experience' && <MaterialIcons name="work" size={50} color={color}/>}
            </View>
          )
        })}
      >
        <Tab.Screen name="Personal" component={Personal} />
        <Tab.Screen name="Education" component={Education} />
        <Tab.Screen name="Experience" component={Experience} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)
