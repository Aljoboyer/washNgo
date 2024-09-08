import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";
import SplashScreen from "../../screens/common/SplashScreen";

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
            {/* Common Screens */}
            <Stack.Screen
                  options={{
                  headerShown: false,
                  }}
                  name="SplashScreen"
                  component={SplashScreen}
              />
            {/* Auth */}
            <Stack.Screen
                options={{
                headerShown: false,
                }}
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;