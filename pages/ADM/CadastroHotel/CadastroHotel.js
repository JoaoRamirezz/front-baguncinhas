import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow"
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { TextInput, Button } from 'react-native-paper';

export function CadastroHotel(props) {
    const [name, setNome] = useState("")
    const [cnpj, setCNPJ] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setTelefone] = useState("")
    const [pais, setPais] = useState("")
    const [CEP, setCEP] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")

    const cadastrar = async () => {
        const token = sessionStorage.getItem("token")
        const user = JSON.parse(token)
        console.log(user)
        const base64 = Buffer.from(`${user.email}:${user.password}`).toString('base64',);
        const authorization = `Basic ${base64}`;
        const config = {
            headers: {
                Authorization: authorization,
            },
        };


        const data = {
            name,
            cnpj,
            email,
            phone,
            // pais,
            // CEP,
            // cidade,
            // estado,
            // bairro,
            // rua,
            // numero,
            // complemento
        };

        const res = await axios.post("http://localhost:8080/api/hotel", data, config);
        if (res.status === 201)
            props.navigation.navigate("HomeADM");
    }

    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
            <Text style={styleCadastroHotel.title}>Cadastrar Hotel</Text>

            <View style={styleCadastroHotel.line}>
                <TextInput
                    label="Nome"
                    onChangeText={(text) => setNome(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />

                <TextInput
                    label="CNPJ"
                    onChangeText={(text) => setCNPJ(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />
            </View>

            <View style={styleCadastroHotel.line}>
                <TextInput
                    label="Email"
                    onChangeText={(text) => setEmail(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />

                <TextInput
                    label="Fone"
                    onChangeText={(text) => setTelefone(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />
            </View>

            <View style={styleCadastroHotel.line}>
                <TextInput
                    label="Pais"
                    onChangeText={(text) => setPais(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />

                <TextInput
                    label="CEP"
                    onChangeText={(text) => setCEP(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />
            </View>

            <View style={styleCadastroHotel.line}>
                <TextInput
                    label="Cidade"
                    onChangeText={(text) => setCidade(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />

                <TextInput
                    label="Estado"
                    onChangeText={(text) => setEstado(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />
            </View>

            <TextInput
                label="Bairro"
                onChangeText={(text) => setBairro(text)}
                mode="outlined"
                style={styleCadastroHotel.input} />

            <TextInput
                label="Rua"
                onChangeText={(text) => setRua(text)}
                mode="outlined"
                style={styleCadastroHotel.input} />

            <View style={styleCadastroHotel.line}>
                <TextInput
                    label="Numero"
                    onChangeText={(text) => setNumero(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />

                <TextInput
                    label="Complemento"
                    onChangeText={(text) => setComplemento(text)}
                    mode="outlined"
                    style={styleCadastroHotel.inputDuplo} />
            </View>

            <Button mode="contained" onPress={() => cadastrar()} style={styleCadastroHotel.button}>
                Cadastrar
            </Button>


        </ImageBackground>
    )
}


const styleCadastroHotel = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    },
    inputDuplo: {
        color: "white",
        backgroundColor: "#AF714F",
        height: 30,
        alignSelf: "center",
        padding: 10,
        borderColor: 'rgba(255,255,255,0.5)',
        marginTop: 20,
        borderRadius: 20,
        width: 145
    },
    line: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "80%",
        alignSelf: "center"
    },
    input: {
        color: "white",
        backgroundColor: "#AF714F",
        height: 30,
        alignSelf: "center",
        padding: 10,
        borderColor: 'rgba(255,255,255,0.5)',
        marginTop: 20,
        borderRadius: 20
    },
    button: {
        padding: 10,
        marginHorizontal: 40,
        marginTop: 40,
        backgroundColor: "#D5A23E",
        borderRadius: 20
    },
})