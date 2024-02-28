import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SIgnUp";
import { Home } from "./pages/Home/Home";
import { Filter } from "./pages/Filter/Filter"
import { SelectedPackage } from "./pages/SelectedPackage/SelectedPackage"
import { UserPage } from "./pages/UserPage/UserPage"
import { Card } from "./pages/Card/Card";
import { SelectedHotel } from "./pages/SelectedHotel/SelectedHotel";
import { SelectedRoom } from "./pages/SelectedRoom/SelectedRoom";
import { CardRegister } from "./pages/CardRegister/CardRegister";
import { EscolherHorario } from "./pages/EscolherHorario/EscolherHorario";
import { HomeADM } from "./pages/ADM/HomeADM/HomeADM";
import { CadastroHotel } from "./pages/ADM/CadastroHotel/CadastroHotel";
import { CadastroQuarto } from "./pages/ADM/CadastroQuarto/CadastroQuarto";
import { CadastroPassagem } from "./pages/ADM/CadastroPassagem/CadastroPassagem";
import { CadastroPacote } from "./pages/ADM/CadastroPacote/CadastroPacote";


export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([])

  return (
    <utilsContext.Provider value={{ data, setData }}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false, headerTransparent: true}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="CardRegister" component={CardRegister} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="Cards" component={Card} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="UserPage" component={UserPage} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SelectedPackage" component={SelectedPackage} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SelectedHotel" component={SelectedHotel} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="SelectedRoom" component={SelectedRoom} options={{headerShown: false, headerTransparent: true}}/>
          <Stack.Screen name="HomeADM" component={HomeADM} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="CadastroHotel" component={CadastroHotel} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="CadastroQuarto" component={CadastroQuarto} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="CadastroPassagem" component={CadastroPassagem} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="CadastroPacote" component={CadastroPacote} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false, headerTransparent: true }} />
          <Stack.Screen name="EscolherHorario" component={EscolherHorario} options={{ headerShown: false, headerTransparent: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}