import { useState } from "react";
import {StyleSheet, View, TextInput,Text, TouchableOpacity} from "react-native"
import { setEnabled } from "react-native/Libraries/Performance/Systrace";

export function Filter(props) {

    [destino, setDestino] = useState("");
    [retorno, setRetorno] = useState("");
    [entrada, setEntrada] = useState("");
    [hospedes, setHospedes] = useState(0);



    function search(){
      props.navigation.navigate("Home")

    }

    return(
        <>
            <View style={styleFilter.bg}>

            <View style={styleFilter.line}>
                <Text style={styleFilter.text}>Destino: </Text>
                <TextInput width={10} style={styleFilter.input} onChangeText={(text) => setDestino(text)}/>
                </View>

                <View style={styleFilter.line}>
                <Text style={styleFilter.text}>Data Entrada: </Text>
                <TextInput width={10} style={styleFilter.input} onChangeText={(text) => setEntrada(text)}/>
                </View>

                <View style={styleFilter.line}>
                <Text style={styleFilter.text}>Data Retorno: </Text>
                <TextInput width={10} style={styleFilter.input} onChangeText={(text) => setRetorno(text)}/>
                </View>

                <View style={styleFilter.line}>
                <Text style={styleFilter.text}>Hóspedes</Text>
                <TextInput width={10} style={styleFilter.input} onChangeText={(text) => setHospedes(text)}/>
                </View>

                <TouchableOpacity style={styleFilter.botao} onPress={() => search()}><Text style={styleFilter.botaoTexto}>Procurar Hoteis</Text></TouchableOpacity>
            </View>
        </>
    )
}


const styleFilter = StyleSheet.create({
    bg: {
        backgroundColor: "#36CECC",
      height: "100%",
    },
    input: {
        height: 40,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5,
        backgroundColor: "#65F4F2",
        height: 50,
        borderRadius: 20
      },
    line:{
        marginVertical: 20,
        marginHorizontal: 30,
    },
    text:{
        fontWeight: "900",
        padding: 10,
        marginBottom: 10,
        color:"#176585"
    },
    botao: {
        padding: 10,
        backgroundColor: "#176585",
        marginHorizontal: 80,
        textAlign: "center",
        borderRadius: 10,
        color: "white",
        justifyContent: "center"
    },
    botaoTexto: {
        textAlign: "center",
        color: "white"
    }
})