import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/SignUp/SIgnUp";
import { Home } from "./pages/Home/Home";
import {Filter} from "./pages/Filter/Filter"
import {SelectedHotel} from "./pages/SelectedHotel/SelectedHotel"
import { UserPage } from "./pages/UserPage/userpage";


export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([])

  return (
    <utilsContext.Provider value = {{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="SelectedHotel" component={SelectedHotel} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="User" component={UserPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}