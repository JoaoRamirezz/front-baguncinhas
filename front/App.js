import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/SignUp/SIgnUp";
import { useState } from "react";

export default function App() {
  const Stack = createStackNavigator();
  const [data,setData] = useState([])

  return (
    <utilsContext.Provider value = {{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}