import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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