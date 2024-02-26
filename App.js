import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SIgnUp";
import { Home } from "./pages/Home/Home";
import {Filter} from "./pages/Filter/Filter"
import {SelectedHotel} from "./pages/SelectedHotel/SelectedHotel"
import { UserPage } from "./pages/UserPage/Userpage";


export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([])
  
  return (
    <utilsContext.Provider value = {{data, setData}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="Filter" component={Filter} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SelectedHotel" component={SelectedHotel} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="User" component={UserPage} options={{headerShown: false, headerTransparent: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}