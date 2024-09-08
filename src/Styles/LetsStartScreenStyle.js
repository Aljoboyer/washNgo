import { StyleSheet, Dimensions} from "react-native";
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const LetsStartScreenStyle = StyleSheet.create({
        textViewStyle:{paddingHorizontal: 10 , width: screenWidth, alignItems: 'center', marginVertical: 8, }
  });