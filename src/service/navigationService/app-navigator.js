import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";
import LetsStart from "../../screens/common/LetsStart";
import SignUp from "../../screens/auth/SignUp";
import Home from "../../screens/home/Home";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const userData = useSelector((state) => state.userInfo.userInfo)

    return (
      <NavigationContainer>
        {
          userData?.name ?  <Stack.Navigator initialRouteName="Home">
          
           <Stack.Screen
              options={{
              headerShown: false,
              }}
              name="Home"
              component={Home}
          />
          
      </Stack.Navigator> : <Stack.Navigator initialRouteName={'LetsStart'}>
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
        </Stack.Navigator>
        }
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;