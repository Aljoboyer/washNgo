import { View, Text, Image, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeHeader from '../../components/Headers/WelcomeHeader';
import AppLogoContainer from '../../components/AppLogoContainer/AppLogoContainer';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const SplashScreen = () => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar
          translucent={false}
          barStyle={'light-content'}
          backgroundColor="white" 
          />
        <WelcomeHeader/>
        <AppLogoContainer
          marginVertical='auto'
          marginTop='50%'
        />
        
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