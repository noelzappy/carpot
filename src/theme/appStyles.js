import { StyleSheet } from 'react-native'
import { FontSize, Colors, Sizes } from './Variables'

export const TextSizes = StyleSheet.create({
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

export const Common = StyleSheet.create({
  backgroundPrimary: {
    backgroundColor: Colors.primary,
  },
  backgroundReset: {
    backgroundColor: Colors.transparent,
  },
  textInputContainer: {
    borderColor: Colors.text,
    backgroundColor: Colors.inputBackground,
    color: Colors.text,
    minHeight: 50,

    marginTop: Sizes.tiny,
  },
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
  backgroundGray: {
    backgroundColor: Colors.grayFour,
  },
  rounded: {
    borderRadius: 10,
  },
  labelText: {
    color: Colors.grayThree,
  },
})

export const Gutters = StyleSheet.create({
  ...Object.entries(Sizes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      /* Margins */
      [`${key}BMargin`]: {
        marginBottom: value,
      },
      [`${key}TMargin`]: {
        marginTop: value,
      },
      [`${key}RMargin`]: {
        marginRight: value,
      },
      [`${key}LMargin`]: {
        marginLeft: value,
      },
      [`${key}VMargin`]: {
        marginVertical: value,
      },
      [`${key}HMargin`]: {
        marginHorizontal: value,
      },
      /* Paddings */
      [`${key}BPadding`]: {
        paddingBottom: value,
      },
      [`${key}TPadding`]: {
        paddingTop: value,
      },
      [`${key}RPadding`]: {
        paddingRight: value,
      },
      [`${key}LPadding`]: {
        paddingLeft: value,
      },
      [`${key}VPadding`]: {
        paddingVertical: value,
      },
      [`${key}HPadding`]: {
        paddingHorizontal: value,
      },
      [`${key}Padding`]: {
        padding: value,
      },
    }),
    {},
  ),
})

export const Layout = StyleSheet.create({
  /* Column Layouts */
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colVCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  colHCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  /* Row Layouts */
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowVCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* Default Layouts */
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  /* Operation Layout */
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: '90deg' }],
  },
  rotate90Inverse: {
    transform: [{ rotate: '-90deg' }],
  },
})
