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
  const nameRegex = /^[A-Za-z\s]*$/
  const [checked, setChecked] = useState(false)
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const [name, setName] = useState('')

   // -----------Error State------------//
   const [emailErr, setEmailErr] = useState('')
   const [passWordErr, setPassWordErr] = useState('')
   const [nameErr, setNameErr] = useState('')
 
   const signUpHandler = async () => {
     console.log('Login Here')
   }

   const validateHandler = () => {
     let isValid = true
 
     if(!email && !passWord ){
       setEmailErr('Email is required')
       setPassWordErr('Password is required')
       isValid = false
       return
     }
     if(!email.match(/\S+@\S+\.\S+/) || !email){
       setEmailErr('Please input a valid email')
       isValid = false
       
     }
     
     if(!passWord){
       setPassWordErr('Enter Valid Password')
       isValid = false
       
     }
     if(isValid){
       signUpHandler()
     }
   }


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
              onChangeText={(text) => setName(text.trimStart())}
              placeholder="Enter your name"
              keyboardType="default"
              label="Name"
              error={nameErr}
              defaultValue={name}
            />
              <WashInput
              icon1={<AntDesign name='mail'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => {
                setEmail(text.trim())
                setEmailErr('')
              }}
              placeholder="xyz@gmail.com"
              keyboardType="default"
              label="Email"
              error={emailErr}
              defaultValue={email}
            />
            <WashInput
              icon1={<Feather name='lock'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => {
                setPassWord(text.trim())
                setPassWordErr('')
              }}
              placeholder="Password"
              keyboardType="default"
              label="Password"
              secureTextEntry={true}
              error={passWordErr}
              defaultValue={passWord}
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
              onPress={() => validateHandler()}
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