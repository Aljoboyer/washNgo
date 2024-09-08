import { View, Dimensions, Image } from 'react-native'
import React from 'react'
const {width: screenWidth} = Dimensions.get('screen');

const AppLogoContainer = ({width = screenWidth,height = 310, marginVertical = 'auto', marginHorizontal = 0, marginTop= 0 }) => {
  return (
<View style={{width: width, height: height, marginVertical: marginVertical, marginHorizontal: marginHorizontal, marginTop: marginTop}}>
    <Image
      resizeMode='contain'
      style={{height: '100%', width: '100%'}}
      source={require('../../assets/images/applogo.png')}
    />
  </View>
  )
}

export default  AppLogoContainer;