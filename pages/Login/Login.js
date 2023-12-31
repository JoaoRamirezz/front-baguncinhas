import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useState } from "react";
import axios from "axios";

export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
      const data = {
        email,
        password
      }

      axios
      const res = await axios.post("http://localhost:8080/api/user/login", data);
      
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data)
        props.navigation.navigate("Home")
      }
    }


    return (
        <View style={styleLogin.bg}>
            <View>
                <Image
                  style = {styleLogin.Logo}
                  source={require('../../assets/Logo.png')}
                />
                <Text style={styleLogin.textView}>Email:</Text>
                <TextInput
                    style={styleLogin.input}
                    multiline
                    maxLength={20}
                    numberOfLines={2}
                    width={10}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styleLogin.textView}>Senha:</Text>
                <TextInput
                    style={styleLogin.input}
                    multiline
                    maxLength={20}
                    numberOfLines={2}
                    width={10}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <View style={styleLogin.buttonLogin}>
                <TouchableOpacity style={styleLogin.button} onPress={() => login()}>
                    <Text style={styleLogin.textbutton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleLogin.button1}
                    onPress={() => props.navigation.navigate("SignUp")}
                >
                    <Text style={styleLogin.textbutton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styleLogin = StyleSheet.create({
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
      backgroundColor: "white",
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
      alignItems: "center",
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
  });