import { View } from 'react-native'
import React from 'react'
import AppLogoContainer from '../AppLogoContainer/AppLogoContainer';
import WashText from '../WashText/WashText';

const AuthHeader = ({title, suggestionTxt, suggestionTxt2}) => {
  return (
    <View>
        <AppLogoContainer
          width={220}
          height={140}
          marginVertical={0}
          marginTop="10%"
          marginHorizontal='auto'
        />
        <View style={{paddingLeft: 20, marginTop: 10}}>
            <WashText
            title={title} 
            preset='title'
            />
            <WashText
            title={suggestionTxt} 
            preset='title3'
            />
            <WashText
            title={suggestionTxt2} 
            preset='title3'
            />
        </View>
    </View>
  )
}

export default AuthHeader;