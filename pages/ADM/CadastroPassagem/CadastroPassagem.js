import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, } from "react-native";
import { useState, useEffect } from "react";
import { Picker } from '@react-native-picker/picker';
import Backarrow from "../../../components/BackArrow/backarrow"
import {Buffer} from "buffer"
import axios from "axios";
import { TextInput, Button } from "react-native-paper";


export function CadastroPassagem(props) {
    const [price, setPrice] = useState("")
    const [classId, setClassId] = useState("")
    const [departureAddress, setOutAdress] = useState("")
    const [departureDateTime, setOutDate] = useState("")
    const [arrivalAddress, setArrivalAdress] = useState("")
    const [arrivalDateTime, setArrivalDate] = useState("")
    const [transportTypeId, setTransport] = useState("")
    
    const [ticketClasses, setClasses] = useState([])
    const [ticketTypes, setTypes] = useState([])


    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:8080/api/ticket/types')
            setTypes(res.data)

            const res2 = await axios.get('http://localhost:8080/api/ticket/classes')
            setClasses(res2.data)
        }

        getData()
    }, [])

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
            price,
            classId,
            departureAddress,
            departureDateTime,
            arrivalAddress,
            arrivalDateTime,
            transportTypeId
        }

        const res = await axios.post("http://localhost:8080/api/ticket", data, config);
        if (res.status === 201)
            props.navigation.navigate("HomeADM");
    }

    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
            <Text style={styleCadastroPassagem.title}>Cadastrar Passagem</Text>
            <Image
                style={styleCadastroPassagem.logo}
                source={require("../../../assets/passagensImg.png")}
            />

            <Picker
                selectedValue={transportTypeId}
                style={styleCadastroPassagem.select}
                onValueChange={(itemValue, itemIndex) =>
                    setTransport(parseInt(itemValue))
                }>
                {ticketTypes.map((t) => <Picker.Item label={t.name} value={t.id} />)}
            </Picker>

            <Picker
                selectedValue={classId}
                style={styleCadastroPassagem.select}
                onValueChange={(itemValue, itemIndex) =>
                    setClassId(parseInt(itemValue))
                }>
                {ticketClasses.map((t) => <Picker.Item label={t.name} value={t.id} />)}
            </Picker>

            <TextInput
                label="Price"
                onChangeText={(text) => setPrice(text)}
                mode="outlined"
                style={styleCadastroPassagem.input} />

            <TextInput
                label="Endereço de saída"
                onChangeText={(text) => setOutAdress(text)}
                mode="outlined"
                style={styleCadastroPassagem.input} />

            <TextInput
                label="Data de saída"
                onChangeText={(text) => setOutDate(text)}
                mode="outlined"
                style={styleCadastroPassagem.input} />

            <TextInput
                label="Endereço de chegada"
                onChangeText={(text) => setArrivalAdress(text)}
                mode="outlined"
                style={styleCadastroPassagem.input} />

            <TextInput
                label="Data de chegada"
                onChangeText={(text) => setArrivalDate(text)}
                mode="outlined"
                style={styleCadastroPassagem.input} />

            <Button mode="contained" onPress={() => cadastrar()} style={styleCadastroPassagem.button}>
                Cadastrar
            </Button>

        </ImageBackground>
    )
}


const styleCadastroPassagem = StyleSheet.create({
    button: {
        padding: 10,
        marginHorizontal: 40,
        marginTop: 40,
        backgroundColor: "#AF714F",
        borderRadius: 20
    },

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

    select: {
        marginTop: 15,
        height: "5%",
        alignSelf: "center",
        padding: 10,
        borderColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        width: "60%"
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
})