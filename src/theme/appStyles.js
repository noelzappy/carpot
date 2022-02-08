import { StyleSheet } from 'react-native'
import { FontSize, Colors } from './Variables'

export const textSizes = StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
})

export const commonStyles = StyleSheet.create({
  backgroundPrimary: {
    backgroundColor: Colors.primary,
  },
  backgroundReset: {
    backgroundColor: Colors.transparent,
  },
  textInput: {
    borderColor: Colors.text,
    backgroundColor: Colors.inputBackground,
    color: Colors.text,
    minHeight: 50,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
})
