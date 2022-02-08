import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import HomeNavigator from '../Stacks/Stacks'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={DrawerMenuContainer}
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Drawer.Screen name="Home" component={HomeNavigator} />
  </Drawer.Navigator>
)
