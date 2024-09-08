import { TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import WashText from '../WashText/WashText';
import { COLORS } from '../../theme/colors';
import { Commonstyles } from '../../Styles/CommonStyles';

export default function WashButton({customTextStyle, customBtnStyle, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={[ButtonStyle.buttons, customBtnStyle, Commonstyles.FlexCenter]}>
      <WashText title={title} preset="title1" customStyle={customTextStyle}/>
    </TouchableOpacity>
  )
}

const ButtonStyle = StyleSheet.create({
    buttons: {
        height: 52,
        backgroundColor: COLORS.SKYBLUE,
        borderRadius: 50,
        width: 330
    }
  });