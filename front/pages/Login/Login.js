import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { utilsContext } from "../../contexts/SignUpContext";
import { useState } from "react";
import styleLogin from "./style";


export function Login(props) {
    const { data, setData } = useContext(utilsContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function login() {
        data.forEach((u) => {
            if (u.email == email && u.senha == senha)
                props.navigation.navigate("Users");
        });
    }


    return (
        <View style={styleLogin.bg}>
            <View>
                <Text style={styleLogin.title}>Login</Text>
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
                    onChangeText={(text) => setSenha(text)}
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