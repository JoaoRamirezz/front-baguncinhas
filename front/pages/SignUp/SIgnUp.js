import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch
} from "react-native";
import { useContext, useState } from "react";
import { utilsContext } from "../../contexts/SignUpContext";
import styleSignUp from "./style";


export function SignUp(props) {


  const { data, setData } = useContext(utilsContext)
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarSenha] = useState("");
  const [notificacao, setNotificacao] = useState(false);

  function cadastrar() {
    setData([...data, { nome, idade, sexo, email, senha, notificacao }])
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
            style={styleSignUp.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangeText={(text) => setIdade(text)}
          />
        </View>

        <View>
          <Text style={styleSignUp.textView}>Sexo:</Text>
          <TextInput
            style={styleSignUp.input}
            multiline
            maxLength={20}
            numberOfLines={2}
            width={10}
            onChangeText={(text) => setSexo(text)}
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
          onChangeText={(text) => setSenha(text)}
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
          onChangeText={(text) => setConfirmarSenha(text)}
        />
      </View>

      <Text style={styleSignUp.textView}>Deseja receber notificações?</Text>
      <Switch
        style={styleSignUp.switch}
        trackColor={{ false: "#767577", true: "#810bff" }}
        value={notificacao}
        onValueChange={() => setNotificacao(!notificacao)}
      />

      <View style={styleSignUp.buttonLogin}>
        <TouchableOpacity style={styleSignUp.button} onPress={() => cadastrar()}>
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