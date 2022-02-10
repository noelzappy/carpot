import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import i18n from 'i18n-js'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { Button, CheckBox, Input, LinearProgress } from 'react-native-elements'

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
    <ScrollView style={[Layout.fill, Common.backgroundWhite]}>
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
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.itemIcons}>
              <Ionicons
                name="settings"
                size={Sizes.large}
                color={Colors.secondary}
              />
            </View>
            <Text>1. {t('lang.spareParts')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.itemIcons}>
              <Ionicons
                name="ios-car-sport"
                size={Sizes.large}
                color={Colors.secondary}
              />
            </View>
            <Text>2. {t('lang.transport')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
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
        <View style={[Gutters.smallTMargin]}>
          <Text style={[TextSizes.textRegular]}>{t('lang.step1')}</Text>
          <LinearProgress
            style={{ marginVertical: 10 }}
            value={0.3}
            color={Colors.primary}
            trackColor={Colors.grayFour}
            variant="determinate"
          />
        </View>

        <View style={[Layout.row]}>
          <AntDesign
            name="infocirlceo"
            size={20}
            color={Colors.blackOne}
            style={[Gutters.smallRMargin]}
          />
          <Text style={[TextSizes.textSmall]}>{t('lang.sparePartInfo')}</Text>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <Input
            label={t('lang.nameOfSparePart')}
            containerStyle={[Common.textInputContainer]}
            placeholder={`Enter ${t('lang.nameOfSparePart')}`}
          />
        </View>

        <View style={[Gutters.smallTMargin]}>
          <Input
            label={t('lang.groupOfSpareParts')}
            containerStyle={[Common.textInputContainer]}
            placeholder={t('lang.enterGroupOfSparePart')}
          />
        </View>
        <View>
          <Text style={[Common.labelText]}>{t('lang.type')}</Text>
          <View style={[Layout.row, Layout.justifyContentAround]}>
            <CheckBox
              title="Будь-який"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
            />
            <CheckBox
              title="Оригінал"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
              uncheckedColor={Colors.secondary}
            />
            <CheckBox
              title="Неоригінал"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
              uncheckedColor={Colors.secondary}
            />
          </View>
        </View>

        <View>
          <Text style={[Common.labelText]}> Стан</Text>
          <View style={[Layout.row, Layout.justifyContentBetween]}>
            <CheckBox
              title="Будь-який"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
            />
            <CheckBox
              title="Нова"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
              uncheckedColor={Colors.secondary}
            />
            <CheckBox
              title="Б/У"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={false}
              onPress={() => {}}
              checkedColor={Colors.secondary}
              containerStyle={{
                backgroundColor: Colors.white,
                borderWidth: 0,
              }}
              uncheckedColor={Colors.secondary}
            />
          </View>
        </View>
        <View style={[Gutters.smallTMargin]}>
          <Input
            label="Додатковий опис"
            containerStyle={[Common.textInputContainer]}
            placeholder={`Enter ${t('lang.nameOfSparePart')}`}
          />
        </View>

        <View
          style={[
            Gutters.smallMargin,
            { backgroundColor: Colors.grayFive, maxWidth: Sizes.large * 4 },
            Gutters.smallPadding,
            Layout.alignItemsCenter,
            Common.rounded,
          ]}
        >
          <Text style={[TextSizes.textRegular]}>артикул</Text>
        </View>
        <View style={[Gutters.regularVMargin]}>
          <Button
            title="ПРОДОВЖИТИ"
            buttonStyle={[
              Gutters.regularVPadding,
              Common.backgroundPrimary,
              Common.rounded,
            ]}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default AddItem
