import { View, StatusBar, SafeAreaView, TouchableOpacity,Dimensions, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import WashInput from '../../components/WashInput/WashInput'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../theme/colors'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import WashButton from '../../components/WashButton/WashButton'
import { Commonstyles } from '../../Styles/CommonStyles'
import WashText from '../../components/WashText/WashText'
import AuthBottomContainer from '../../components/AuthBottomContainer/AuthBottomContainer'
import { useSignUpMutation } from '../../redux/api/authApi';
import { useDispatch } from 'react-redux';
import { saveuserInfoInfo } from '../../redux/slices/userSlice';
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const SignUp = ({navigation}) => {
  const nameRegex = /^[A-Za-z\s]*$/
  const [passwordShow, setPasswordShow] = useState(false)
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const [phone, setPhone] = useState('')
  const [passWord, setPassWord] = useState('')
  const [name, setName] = useState('')

   // -----------Error State------------//
   const [phoneErr, setPhoneErr] = useState('')
   const [passWordErr, setPassWordErr] = useState('')
   const [nameErr, setNameErr] = useState('')

   const [isLoading, setIsLoading] = useState(false)

   const [addSignUp, { }] = useSignUpMutation();


   const signUpHandler = async () => {
      // console.log('SIGNU Here')
      const requestObj = {
        phone: phone,
        name: name,
        password: passWord
    }
      let response = await addSignUp(requestObj);

      console.log("sign up response", response)
      if(response?.data?.data?.id){
        dispatch(saveuserInfoInfo(response?.data?.data))
        setIsLoading(false)
        navigation.navigate('Home')
      }
      else{
        setPhoneErr('Phone Number is Already Exists')
        setIsLoading(false)
      }
   }

   const validateHandler = () => {
    setIsLoading(true)
     let isValid = true
 
     if(!phone && !passWord && !name){
       setPhoneErr('Phone is required')
       setPassWordErr('Password is required')
       setNameErr('Name is required')
       isValid = false
       setIsLoading(false)
       return
     }
     if (nameRegex.test(name) === false || name.trim().length === 0 ) {
      setNameErr('Please write proper name')
      setIsLoading(false)
      isValid = false
    }
    if (!(/^\d+$/).test(phone)) {
      setPhoneErr('Please Enter valid phone number')
      isValid = false
      setIsLoading(false)
      return;
    }
     if(!passWord){
      setIsLoading(false)
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
        <ScrollView>
        <AuthHeader
            title="Sign Up"
            suggestionTxt="Fill in the below form and add life to"
            suggestionTxt2="your car!"
          />
          
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <WashInput
              icon1={<Feather name='user'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => {
                setName(text.trimStart())
                setNameErr('')
              }}
              placeholder="Enter your name"
              keyboardType="default"
              label="Name"
              error={nameErr}
              defaultValue={name}
            />
              
              <WashInput
              icon1={<AntDesign name='phone'  color={COLORS.GRAY} size={22}/>}
              onChangeText={(text) => {
                setPhone(text.trimStart())
                setPhoneErr('')
              }}
              placeholder="Enter phone"
              keyboardType="number-pad"
              label="Phone"
              error={phoneErr}
              defaultValue={phone}
              // maxLength={10}
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
              error={passWordErr}
              defaultValue={passWord}
              secureTextEntry={passwordShow ? false : true}
              passWordPress={() => setPasswordShow(!passwordShow)}
              icon2={passwordShow ? <SimpleLineIcons name='eye'  color={COLORS.GRAY} size={22}/> : <Feather name='eye-off'  color={COLORS.GRAY} size={22}/>}
            />

            <View style={[Commonstyles.FlexStart, {marginTop: 8}]}>
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    {
                        checked ? <AntDesign name='checksquare' size={22} color={COLORS.SKYBLUE}/> :  <Feather name='square' size={22} color={COLORS.DARKBLACK}/>
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
              title={isLoading ? "Loading..." : 'Sign Up'}
              customBtnStyle={{alignSelf: 'center', marginTop: 20}}
              onPress={() => {
                if(!isLoading){
                  validateHandler()
                }
              }}
            />

          </View>
        </ScrollView>
          
          
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