import { View, Dimensions, Image } from 'react-native'
import React from 'react'
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const WelcomeHeader = () => {
  return (
    <View style={{width: screenWidth}}>
        <Image
            resizeMode='contain'
            style={{height: 190, width: 150, position: 'absolute', top: 0, left: 0}}
            source={require('../../assets/images/topLeftSmall.png')}
        />
        <Image
        resizeMode='contain'
        style={{height: 200, width: 140, position: 'absolute', top: 0, right: 0, borderRadius: 40}}
        source={require('../../assets/images/topRightLarge.png')}
        />
    </View>
  )
}

export default WelcomeHeader;