import { View, StatusBar, ScrollView, TouchableOpacity,Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import WashInput from '../../components/WashInput/WashInput'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../theme/colors'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import WashButton from '../../components/WashButton/WashButton'
import { Commonstyles } from '../../Styles/CommonStyles'
import WashText from '../../components/WashText/WashText'
import { AuthStyles } from '../../Styles/AuthStyles'
import AuthBottomContainer from '../../components/AuthBottomContainer/AuthBottomContainer'
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const Login = () => {
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor="white" 
        />
      <ScrollView >
          <AuthHeader
            title="Sign In"
            suggestionTxt="Hi ! Welcome back, you"
            suggestionTxt2="have been missed"
          />
          
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
              <WashInput
              icon1={<AntDesign name='mail'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => setEmail(email)}
              placeholder="xyz@gmail.com"
              keyboardType="default"
              label="Email"
              customStyle2={{marginTop: 4}}
            />
            <WashInput
              icon1={<Feather name='lock'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => setEmail(email)}
              placeholder="Password"
              keyboardType="default"
              // customStyle2={{marginTop: 4}}
              customStyle3={{marginTop: 20}}
              label="Password"
              secureTextEntry={true}
              icon2={<SimpleLineIcons name='eye'  color={COLORS.GRAY} size={22}/>}
            />

            <TouchableOpacity style={Commonstyles.FlexEnd}>
                <WashText title="Forgot password ?" preset='title3' customStyle={{color: COLORS.DARKBLACK, fontSize: 14,  textDecorationLine: "underline", marginTop: 10}}/>
            </TouchableOpacity>
            <WashButton
              title="Sign In"
              customBtnStyle={{alignSelf: 'center', marginTop: 20}}
              onPress={() => navigation.navigate('Login')}
            />

            <View style={[Commonstyles.FlexCenter, {marginTop: 10}]}>
                <View style={AuthStyles.emptyView}></View>

                <WashText title="or" preset='small' customStyle={{color: COLORS.DARKBLACK, fontSize: 14, marginHorizontal: 5}}/>

                <View style={AuthStyles.emptyView}></View>

            </View>

            <View style={[Commonstyles.FlexCenter, {marginTop: 10}]}>
                <View style={[AuthStyles.iconView, Commonstyles.FlexCenter]}>
                    <AntDesign name='google' size={22}/>
                </View>

                <View style={[AuthStyles.iconView, Commonstyles.FlexCenter, {marginLeft: 10}]}>
                  <AntDesign name='apple1' size={22}/>  
                </View>

            </View>

          </View>
          
      </ScrollView>
      <AuthBottomContainer 
      text1="Don’t have an account?"
      text2="Sign Up"
      text3="By login or sign up, you agree to our terms of use and"
      text4="privacy policy"
      />
        <View style={{width: screenWidth}}>
            <Image
            resizeMode='contain'
            style={{height: 130, width: 180, position: 'absolute', bottom: 0, left: 0, borderRadius: 30, zIndex: -1}}
            source={require('../../assets/images/bottomLeftLarge.png')}
           />
        </View>
    </SafeAreaView>
  )
}

export default Login