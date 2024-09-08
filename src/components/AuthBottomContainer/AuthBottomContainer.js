import { View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { LetsStartScreenStyle } from '../../Styles/LetsStartScreenStyle'
import { Commonstyles } from '../../Styles/CommonStyles'
import WashText from '../WashText/WashText'
import { COLORS } from '../../theme/colors'
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function AuthBottomContainer({text1, text2, onPressCall, text3, text4}) {
  return (
    <View>
        <View style={[{paddingHorizontal: 10 , width: screenWidth, alignItems: 'center', marginTop: 5}, Commonstyles.FlexCenter]}>
            <WashText
            title={text1} 
            preset='small'
            />
            <Pressable
            onPress={onPressCall}
            >
                <WashText
                title={text2} 
                preset='title1'
                customStyle={{marginLeft: 4, color: COLORS.DARKBLACK, fontSize: 14}}
                />
            </Pressable>
        </View>
        <View style={{paddingHorizontal: 10 , width: screenWidth, alignItems: 'center', marginVertical: 10}}>
        <WashText
            title={text3} 
            preset='small'
            />
         <WashText
            title={text4} 
            preset='small'
            customStyle={{textAlign: 'canter' }}
            />
        </View>
    </View>
  )
}