import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow"
import { useState, useEffect } from "react";
import { Picker } from '@react-native-picker/picker';
import { Buffer } from "buffer";
import axios from "axios";
import { TextInput, Button } from 'react-native-paper';


export function CadastroPacote(props) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [discount, setDiscount] = useState("")

    const [quartos, setQuartos] = useState([])
    const [quarto, setQuarto] = useState("")

    const [passagens, setPassagens] = useState([])
    const [ida, setIda] = useState("")
    const [volta, setVolta] = useState("")

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
            description,
            discount,
            arrivelTicketId: ida,
            departureTicketId: volta,
            roomId: quarto,
            
        }
        const res = await axios.post("http://localhost:8080/api/package", data, config);
        if (res.status === 201)
            props.navigation.navigate("HomeADM");
    }

    useEffect(() => {
        const getQuartos = async () => {
            const res = await axios.get("http://localhost:8080/api/room");
            setQuartos(res.data)
        }

        const getPassagens = async () => {
            const res = await axios.get("http://localhost:8080/api/ticket");
            setPassagens(res.data)
        }

        getQuartos();
        getPassagens();

    }, [])

    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
            <Text style={styleCadastroPacote.title}>Cadastrar Pacote</Text>
            <Image
                style={styleCadastroPacote.logo}
                source={require("../../../assets/pacotesImg.png")}
            />

            <TextInput
                label="Nome"
                onChangeText={(text) => setName(text)}
                mode="outlined"
                style={styleCadastroPacote.input} />

            <TextInput
                label="Descrição"
                onChangeText={(text) => setDescription(text)}
                mode="outlined"
                style={styleCadastroPacote.input} />

            <TextInput
                label="Desconto:"
                onChangeText={(text) => setValue(text)}
                mode="outlined"
                style={styleCadastroPacote.input} />


            <Text style={styleCadastroPacote.label}>Quarto:</Text>
            <Picker
                selectedValue={quarto}
                style={styleCadastroPacote.select}
                onValueChange={(itemValue, itemIndex) =>
                    setQuarto(itemValue)
                }>

                {quartos.map((q) => <Picker.Item label={q.name} value={q.id} />)}
            </Picker>

            <Text style={styleCadastroPacote.label}>Passagem de Ida:</Text>
            <Picker
                selectedValue={ida}
                style={styleCadastroPacote.select}
                onValueChange={(itemValue, itemIndex) =>
                    setIda(itemValue)
                }>

                {passagens.map((i) => <Picker.Item label={`${i.arrivalAddress} -> ${i.departureAddress}`} value={i.id} />)}
            </Picker>

            <Text style={styleCadastroPacote.label}>Passagem de Volta:</Text>
            <Picker
                selectedValue={volta}
                style={styleCadastroPacote.select}
                onValueChange={(itemValue, itemIndex) =>
                    setVolta(itemValue)
                }>

                {passagens.map((h) => <Picker.Item label={`${h.arrivalAddress} -> ${h.departureAddress}`} value={h.id} />)}
            </Picker>

            <Button mode="contained" onPress={() => cadastrar()} style={styleCadastroPacote.button}>
                Cadastrar
            </Button>
        </ImageBackground>
    )
}


const styleCadastroPacote = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 10,
        alignSelf: "center"
    },
    input: {
        color: "white",
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
        marginVertical: 40,
        backgroundColor: "#AF714F",
        borderRadius: 20
    },
    select:{
        height: "5%",
        alignSelf: "center",
        padding: 10,
        borderColor: 'rgba(255,255,255,0.5)',
        borderRadius: 20,
        width: "60%"
    },
    label:{
        height: "5%",
        width: "60%",
        alignSelf: "center",
        fontSize: "18px",
        marginTop: "1em"
    }
})