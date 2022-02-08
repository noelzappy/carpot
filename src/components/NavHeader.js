import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { Colors, appStyles, Sizes } from '../theme'

const NavHeader = ({ title, navigation }) => {
  return (
    <Header
      leftComponent={() => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={Sizes.large} color="black" />
        </TouchableOpacity>
      )}
      centerComponent={() => {
        return title ? (
          <Text style={appStyles.TextSizes.textRegular}>{title}</Text>
        ) : null
      }}
      rightComponent={() => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu-outline"
            size={Sizes.large}
            color={Colors.primary}
          />
        </TouchableOpacity>
      )}
      backgroundColor={Colors.white}
    />
  )
}

export default NavHeader
