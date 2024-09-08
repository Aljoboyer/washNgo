import { StyleSheet, Dimensions} from "react-native";
import { COLORS } from "../theme/colors";
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const AuthStyles = StyleSheet.create({
    emptyView: {backgroundColor: COLORS.SKYBLUE, height: 2, width: 70, },
    iconView: {borderWidth: 1, borderColor: COLORS.SKYBLUE, borderRadius: 100 , height: 40, width: 40}
  });