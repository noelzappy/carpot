import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import i18n from 'i18n-js'
import { Ionicons } from '@expo/vector-icons'
import NavHeader from '../components/NavHeader'
import { appStyles, Colors, Sizes } from '../theme'
const { TextSizes, Gutters, Common, Layout } = appStyles

const styles = {
  itemIcons: [
    Gutters.smallPadding,
    Common.backgroundPrimary,
    Common.rounded,
    Layout.alignItemsCenter,
  ],
}

const AddItem = ({ navigation }) => {
  const { t } = i18n

  return (
    <>
      <NavHeader navigation={navigation} />
      <View
        style={[Gutters.regularHPadding, Common.backgroundWhite, { flex: 1 }]}
      >
        <View>
          <Text
            style={{
              ...TextSizes.titleSmall,
              ...Gutters.smallVPadding,
            }}
          >
            {t('lang.sndRequest')}
          </Text>
        </View>

        <View style={[Layout.row, Layout.justifyContentBetween]}>
          <TouchableOpacity>
            <View style={styles.itemIcons}>
              <Ionicons
                name="settings"
                size={Sizes.large}
                color={Colors.secondary}
              />
            </View>
            <Text>1. {t('lang.spareParts')}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.itemIcons}>
              <Ionicons
                name="ios-car-sport"
                size={Sizes.large}
                color={Colors.secondary}
              />
            </View>
            <Text>2. {t('lang.transport')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.itemIcons}>
              <Ionicons
                name="md-person-sharp"
                size={Sizes.large}
                color={Colors.secondary}
              />
            </View>
            <Text>3. {t('lang.contact')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default AddItem
