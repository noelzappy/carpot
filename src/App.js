import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Navigator from './navigator'
import en from './Translations'

i18n.translations = {
  en,
}
i18n.locale = Localization.locale
i18n.fallbacks = true

const App = () => {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <Provider store={store}>
      <Navigator />
    </Provider>
  ) : (
    <View />
  )
}

export default App
