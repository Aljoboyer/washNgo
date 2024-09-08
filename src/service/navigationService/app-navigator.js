import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";
import LetsStart from "../../screens/common/LetsStart";
import SignUp from "../../screens/auth/SignUp";
import Home from "../../screens/home/Home";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LetsStart">
            {/* Common Screens */}
            <Stack.Screen
                options={{
                headerShown: false,
                }}
                name="LetsStart"
                component={LetsStart}
            />
            {/* Auth */}
            <Stack.Screen
                options={{
                headerShown: false,
                }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{
                headerShown: false,
                }}
                name="SignUp"
                component={SignUp}
            />
             <Stack.Screen
                options={{
                headerShown: false,
                }}
                name="Home"
                component={Home}
            />
            
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;