import { View, Dimensions, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'
import WelcomeHeader from '../../components/Headers/WelcomeHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import WashText from '../../components/WashText/WashText';
import WashButton from '../../components/WashButton/WashButton';
import { Commonstyles } from '../../Styles/CommonStyles';
import { LetsStartScreenStyle } from '../../Styles/LetsStartScreenStyle';
import { COLORS } from '../../theme/colors';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const LetsStart = () => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor="white" 
        animated={true}
        hidden={false}
        />
      <WelcomeHeader/>
      
        <View style={{width: screenWidth, height: 310, marginTop: 150}}>
           <Image
            resizeMode='contain'
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/images/applogo.png')}
           />

          <View style={LetsStartScreenStyle.textViewStyle}>
              <WashText
                title="Sparkle & Shine  Transform" 
                preset='p'
              />
              <WashText
                title="Your Drive with Every Wash!" 
                preset='p'
              />
          </View>

          <WashButton
            title="Let's Start"
            customBtnStyle={{alignSelf: 'center'}}
          />
          
          <View style={[LetsStartScreenStyle.textViewStyle, Commonstyles.FlexCenter]}>
              <WashText
                title="Already  have an account?" 
                preset='small'
              />
              <Pressable>
                <WashText
                title="Sign in" 
                preset='title1'
                customStyle={{marginLeft: 4, color: COLORS.DARKBLACK, fontSize: 14}}
              />
              </Pressable>
          </View>

        </View>
        
    </SafeAreaView>
  )
}

export default LetsStart;