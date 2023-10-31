import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import axios from "axios";

export function SignUp(props) {
  const [nome, setNome] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    // Password didn't match
    if (password !== confirmPassword)
      return;

    // Invalid data
    if (!nome || !age || !email || !password)
      return;
    
    const data = {
      email,
      firstName: 'string',
      lastName: 'string',
      password: 'string',
      CPF: 'string',
    }

    console.log(data)
    const res = await axios.post('http://localhost:8080/api/user/');
    console.log(res);

    props.navigation.navigate("Login")
  }

  return (
    <View style={styleSignUp.bg}>

      <Text style={styleSignUp.textView}>Nome</Text>
      <TextInput
        style={styleSignUp.input}
        multiline
        maxLength={20}
        numberOfLines={2}
        width={10}
        onChangeText={(text) => setNome(text)}
      />

      <View style={styleSignUp.inputs1}>
        <View>
          <Text style={styleSignUp.textView}>Idade:</Text>
          <TextInput
            style={styleSignUp.input2}
            multiline
            numberOfLines={1}
            width={20}
            onChangeText={(text) => setAge(text)}
          />
        </View>
      </View>

      <View>
        <Text style={styleSignUp.textView}>Email:</Text>
        <TextInput
          style={styleSignUp.input}
          multiline
          maxLength={20}
          numberOfLines={2}
          width={10}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
        <Text style={styleSignUp.textView}>Senha:</Text>
        <TextInput
          style={styleSignUp.input}
          multiline
          maxLength={20}
          numberOfLines={2}
          width={10}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View>
        <Text style={styleSignUp.textView}>Confirmar Senha:</Text>
        <TextInput
          style={styleSignUp.input}
          multiline
          maxLength={20}
          numberOfLines={2}
          width={10}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <View style={styleSignUp.buttonLogin}>
        <TouchableOpacity style={styleSignUp.button} onPress={() => signUp()}>
          <Text style={styleSignUp.textbutton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleSignUp.button1}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styleSignUp.textbutton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styleSignUp = StyleSheet.create({
  
  Logo:{
    width: 400,
    height: 250
  },


  input: {
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#65F4F2",
    height: 50,
    borderRadius: 20
  },

  input2: {
    marginLeft: 40,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#65F4F2",
    height: 50,
    borderRadius: 20
  },

  input3: {
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#65F4F2",
    height: 50,
    borderRadius: 20
  },

  bg: {
    backgroundColor: "#36CECC",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  bgUsers: {
    backgroundColor: "lightgray",
    height: "100%",
  },

  inputs1: {
    flexDirection: "row",
    justifyContent: "space-arround",
  },

  textView: {
    marginLeft: 40,
    marginTop: 20,
  },

  switch: {
    marginLeft: 12,
  },

  button: {
    padding: 10,
    margin: 12,
    backgroundColor: "#176585",
    borderRadius: 20
  },
  button1: {
    padding: 10,
    margin: 12,
  },

  textbutton: {
    textAlign: "center",
  },

  title: {
    marginTop: "10%",
    marginBottom: "10%",
    fontSize: 100,
    textAlign: "center",
  },

  titleUsers: {
    fontSize: 70,
  },
})