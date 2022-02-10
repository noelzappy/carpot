import { View, Text } from 'react-native'
import React from 'react'
import NavHeader from '../components/NavHeader'
import { Common, Gutters, Layout, TextSizes } from '../theme/appStyles'
import { Colors } from '../theme'
import ProductItem from '../components/ProductItem'

const Shop = ({ navigation }) => {
  return (
    <>
      <NavHeader
        navigation={navigation}
        title="Ви можете приймати або відхиляти замовлення"
      />
      <View style={[Common.backgroundWhite, Layout.fill]}>
        <View
          style={[
            {
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            },
            Gutters.smallPadding,
          ]}
        >
          <Text
            style={[
              TextSizes.textRegular,
              {
                color: Colors.primary,
              },
            ]}
          >
            Скасувати
          </Text>
        </View>
        <View>
          <ProductItem />
        </View>
      </View>
    </>
  )
}

export default Shop
