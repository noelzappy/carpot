import { View, Text } from 'react-native'
import React from 'react'
import { Colors, images, Sizes } from '../theme'
import { Common, Gutters, Layout, TextSizes } from '../theme/appStyles'
import { Image } from 'react-native-elements'

const ProductItem = () => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.graySix,
        },
        Gutters.smallVPadding,
        Gutters.regularHMargin,
        Common.rounded,
      ]}
    >
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <View style={[Gutters.smallLMargin]}>
          <Image
            source={images.image_11}
            style={{
              height: Sizes.large * 2,
              width: Sizes.regular * 6,
              ...Common.rounded,
            }}
          />
        </View>
        <View>
          <Text> Турбо СТО 911</Text>
          <Text> Турбо СТО 911</Text>
          <Text> Турбо СТО 911</Text>
        </View>
        <View>
          <Text
            style={[
              TextSizes.textRegular,
              {
                color: Colors.primary,
              },
              Gutters.smallRPadding,
            ]}
          >
            {' '}
            1500 ₴
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ProductItem
