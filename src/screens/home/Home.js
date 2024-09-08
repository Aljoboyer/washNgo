import { View, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import WashButton from '../../components/WashButton/WashButton';
import AppLogoContainer from '../../components/AppLogoContainer/AppLogoContainer';
import WashText from '../../components/WashText/WashText';

const Home = ({navigation}) => {
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor="white" 
        animated={true}
        hidden={false}
        />

        <View style={{marginTop: 150}}>

          <AppLogoContainer
            height={200}
            marginVertical={10}
          />

            <View style={{marginVertical: 50}}>
                <WashText
                title="Welcome Jhon" 
                preset='title2'
                customStyle={{textAlign: 'center'}}
              />
            </View>
          <WashButton
            title="Logout"
            customBtnStyle={{alignSelf: 'center', marginTop: 20}}
            onPress={() => navigation.navigate('Login')}
          />
       
        </View>
    </SafeAreaView>
  )
}

export default Home;