import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');


const SplashScreen = () => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
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

        <View style={{width: screenWidth, height: 310, marginVertical: 'auto'}}>
           <Image
            resizeMode='contain'
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/images/applogo.png')}
           />
        </View>

        <View style={{width: screenWidth}}>
            <Image
            resizeMode='contain'
            style={{height: 200, width: 220, position: 'absolute', bottom: 0, right: 0, borderRadius: 30}}
            source={require('../../assets/images/bottomRightLarge.png')}
           />
        </View>
    </SafeAreaView>
    
  )
}

export default SplashScreen;

// display: 'flex', justifyContent: 'space-between', flexDirection: 'row', 