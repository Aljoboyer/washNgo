import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors';
import WashText from '../WashText/WashText';

const WashInput = ({placeholder, numberOfLines, onChangeText, customStyle, keyboardType, maxLength,error, secureTextEntry = false, customStyle2, icon1, icon2, label, customStyle3, defaultValue, passWordPress}) => {

  return (
   <View style={customStyle3}>
    <WashText title={label} preset='title3' customStyle={{color: COLORS.DARKBLACK}}/>
       <View style={[customStyle2, InputStyle.InputBox]}>
      {icon1}
        <TextInput
            placeholder={placeholder}
            numberOfLines={numberOfLines}
            onChangeText={(text) => onChangeText(text)}
            style={[InputStyle.inputs, customStyle]}
            keyboardType={keyboardType}
            maxLength={maxLength}
            // onFocus={onFocus}
            // onBlur={onBlur}
            placeholderTextColor={COLORS.GRAY}
            secureTextEntry={secureTextEntry}
            value={defaultValue}
        />
        {icon2 && <TouchableOpacity onPress={passWordPress}>{icon2}</TouchableOpacity>}
      </View>
      <WashText title={error} preset='small' customStyle={{color: 'red', fontSize: 12}}/>
   </View>
  )
}

export default WashInput;

const InputStyle = StyleSheet.create({
    inputs: {
        backgroundColor: 'white',
        paddingHorizontal: 4,
        color: 'black',
        width: '85%',
        marginHorizontal: 5,
    },
    InputBox:{
      borderWidth: 1,
      borderColor: COLORS.GRAY,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 7
    }
  });