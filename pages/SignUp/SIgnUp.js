import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { TextInput, Button } from 'react-native-paper';


export function SignUp(props) {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCPF] = useState("");

  const login = async () => {
    // Password didn't match
    if (password !== confirmPassword) return;

    // Invalid data
    if (!firstName || !age || !email || !password || !cpf || !lastName) return;

    const data = {
      email,
      firstName,
      lastName,
      password,
      birthday: new Date(age),
      cpf: cpf,
    };
    console.log(data)

    const res = await axios.post("http://localhost:8080/api/user/", data);


    if (res.status === 201) {
      sessionStorage.setItem("token", res.data)
      props.navigation.navigate("Login");
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Bgs/BackgroundCadastro.png')}
      style={{ width: 400, height: 1000 }}
    >
      <View style={StyleSignUp.bg}>
        <View>
          <Image
            style={StyleSignUp.Logo}
            source={require('../../assets/LogoBgcPlanes.png')}
          />

          <View style={StyleSignUp.twoInputs}>
            <TextInput
              label="Primeiro Nome"
              onChangeText={(text) => setName(text)}
              mode="outlined"
              style={StyleSignUp.inputPass}
            />

            <TextInput
              label="Ultimo Nome"
              onChangeText={(text) => setLastName(text)}
              mode="outlined"
              style={StyleSignUp.inputPass}
            />
          </View>

          <TextInput
            label="Email"
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            style={StyleSignUp.input}
          />

          <View style={StyleSignUp.twoInputs}>
            <TextInput
              label="Senha"
              onChangeText={(text) => setPassword(text)}
              mode="outlined"
              style={StyleSignUp.inputPass}
            />

            <TextInput
              label="Confirmar Senha"
              onChangeText={(text) => setConfirmPassword(text)}
              mode="outlined"
              style={StyleSignUp.inputPass}
            />
          </View>

          <TextInput
            label="CPF"
            onChangeText={(text) => setCPF(text)}
            mode="outlined"
            style={StyleSignUp.input}
          />
          <TextInput
            label="Data de Nascimento"
            onChangeText={(text) => setAge(text)}
            mode="outlined"
            style={StyleSignUp.input}
          />

        </View>


        <View style={StyleSignUp.buttonLogin}>
          <Button mode="contained" onPress={() => login()} style={StyleSignUp.button}>
            Cadastrar
          </Button>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
          >
            <Text style={StyleSignUp.textbutton}>Cancelar</Text>
          </TouchableOpacity>
        </View>


      </View >
    </ImageBackground>
  );
}

const StyleSignUp = StyleSheet.create({
  Logo: {
    marginTop: 25,
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
    width: 300
  },

  inputPass: {
    height: 30,
    alignSelf: "center",
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'rgba(255,255,255,0.5)',
    marginTop: 20,
    borderRadius: 20,
    width: 145
  },


  button: {
    padding: 10,
    marginHorizontal: 40,
    marginTop: 40,
    backgroundColor: "#176585",
    borderRadius: 20
  },

  textbutton: {
    marginTop: 10,
    textAlign: "center"
  },

  twoInputs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    alignSelf: "center"
  },

  bg: {
    width: "100%"
  }
});
