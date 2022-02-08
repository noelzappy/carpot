import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons, Fontisto } from '@expo/vector-icons'

import AddItem from '../../screens/AddItem'
import Chat from '../../screens/Chat'
import Home from '../../screens/Home'
import Shop from '../../screens/Shop'
import Profile from '../../screens/Profile'
import { Colors } from '../../theme/Variables'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let tabIcon
        switch (route.name) {
          case 'HomeScreen':
            tabIcon = <AntDesign name="home" size={size} color={color} />
            break
          case 'ProfileScreen':
            tabIcon = (
              <Ionicons name="person-circle" size={size} color={color} />
            )
            break
          case 'ChatScreen':
            tabIcon = <Fontisto name="comments" size={size} color={color} />
            break
          case 'ShopScreen':
            tabIcon = <AntDesign name="profile" size={size} color={color} />
            break
          case 'AddItemScreen':
            tabIcon = <Ionicons name="add-circle" size={size} color={color} />
            break
          default:
            break
        }

        return tabIcon
      },
      tabBarLabelStyle: {
        display: 'none',
      },
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
    })}
  >
    <Tab.Screen name="HomeScreen" component={Home} />
    <Tab.Screen name="ChatScreen" component={Chat} />
    <Tab.Screen name="AddItemScreen" component={AddItem} />
    <Tab.Screen name="ShopScreen" component={Shop} />
    <Tab.Screen name="ProfileScreen" component={Profile} />
  </Tab.Navigator>
)

export default TabNavigator
