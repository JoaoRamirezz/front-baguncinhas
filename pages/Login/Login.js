import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = {
      email,
      password
    };

    const base64 = Buffer.from(`${data.email}:${data.password}`).toString(
      'base64',
    );

    const authorization = `Basic ${base64}`;

    const config = {
      headers: {
        Authorization: authorization,
      },
    };
    const res = await axios.get("http://localhost:8080/api/auth", config)

    if (res.status === 200 || res.status === 204) {
      var jsonString = JSON.stringify(data)
      sessionStorage.setItem("token", jsonString)
      console.log("res.data", res.data)
      if(res.data.isAdmin)
        props.navigation.navigate("HomeADM")
      else
        props.navigation.navigate("Home")

    }

  };

  return (
    <ImageBackground
      source={require('../../assets/Bgs/BackgroundLogin.png')}
      style={{ width: 400, height: 1000 }}
    >
      <View style={styleLogin.bg}>
        <View>
          <Image
            style={styleLogin.Logo}
            source={require('../../assets/LogoBgcPlanes.png')}
          />

          <TextInput
            label="Email"
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            style={styleLogin.input}
          />

          <TextInput
            label="Senha"
            onChangeText={(text) => setPassword(text)}
            mode="outlined"
            style={styleLogin.input}
          />
        </View>

        <View style={styleLogin.buttonLogin}>
          <Button mode="contained" onPress={() => login()} style={styleLogin.button}>
            Login
          </Button>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignUp")}
          >
            <Text style={styleLogin.textbutton}>Ainda não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View >
    </ImageBackground>
  );
}

const styleLogin = StyleSheet.create({
  Logo: {
    marginTop: 100,
    width: 400,
    height: 250
  },


  input: {
    height: 30,
    alignSelf: "center",
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'rgba(255,255,255,0.5)',
    marginTop: 20,
    borderRadius: 20,
  },


  button: {
    padding: 10,
    marginHorizontal: 75,
    marginTop: 30,
    backgroundColor: "#D5A23E",
    borderRadius: 20,
  },

  textbutton: {
    marginTop: 10,
    textAlign: "center",
  },
});

