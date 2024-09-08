import { View, StatusBar, ScrollView, TouchableOpacity,Dimensions, Image, KeyboardAvoidingView } from 'react-native'
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

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const [name, setName] = useState('')


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor="white" 
        />
      <KeyboardAvoidingView >
          <AuthHeader
            title="Sign Up"
            suggestionTxt="Fill in the below form and add life to"
            suggestionTxt2="your car!"
          />
          
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <WashInput
              icon1={<Feather name='user'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => setEmail(email)}
              placeholder="Enter your name"
              keyboardType="default"
              label="Name"
              customStyle2={{marginTop: 4}}
              
            />
              <WashInput
              icon1={<AntDesign name='mail'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => setEmail(email)}
              placeholder="xyz@gmail.com"
              keyboardType="default"
              label="Email"
              customStyle2={{marginTop: 4}}
              customStyle3={{marginTop: 10}}

            />
            <WashInput
              icon1={<Feather name='lock'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => setEmail(email)}
              placeholder="Password"
              keyboardType="default"
              // customStyle2={{marginTop: 4}}
              customStyle3={{marginTop: 10}}
              label="Password"
              secureTextEntry={true}
              icon2={<SimpleLineIcons name='eye'  color={COLORS.GRAY} size={22}/>}
            />

            <View style={[Commonstyles.FlexStart, {marginTop: 8}]}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    {
                        checked ? <AntDesign name='checksquare' size={22} color={COLORS.SKYBLUE}/> :  <Feather name='square' size={22}/>
                    }
                   
                </TouchableOpacity>
                <WashText
                    title="Agree with" 
                    preset='title1'
                    customStyle={{marginLeft: 4, color: COLORS.DARKBLACK, fontSize: 14}}
                /> 
                <WashText
                title="Terms & Conditions" 
                preset='small'
                />
            </View>

            <WashButton
              title="Sign Up"
              customBtnStyle={{alignSelf: 'center', marginTop: 20}}
              onPress={() => navigation.navigate('Home')}
            />

          </View>
          
      </KeyboardAvoidingView>

      <AuthBottomContainer 
      text1="Already have an account?"
      text2="Sign In"
      text3="By login or sign up, you agree to our terms of use and"
      text4="privacy policy"
      onPressCall={() => navigation.navigate('Login')}

      />
        <View style={{width: screenWidth}}>
            <Image
            resizeMode='contain'
            style={{height: 100, width: 140, position: 'absolute', bottom: -30, right: 0, borderRadius: 30, zIndex: -1}}
            source={require('../../assets/images/bottomRightLargeGreen.png')}
           />
        </View>
    </SafeAreaView>
  )
}

export default SignUp