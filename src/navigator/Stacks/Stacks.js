import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from 'theme'
import TabNavigator from '../Tabs/Tabs'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createNativeStackNavigator()

// ------------------------------------
// Navigators
// ------------------------------------

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={() => ({
        title: 'Home',
      })}
    />
  </Stack.Navigator>
)

export default HomeNavigator
