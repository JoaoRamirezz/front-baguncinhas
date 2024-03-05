import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow";
import { TextInput, Button } from 'react-native-paper';
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { Picker } from '@react-native-picker/picker';


export function CadastroQuarto(props) {
    const [hotel, setHotel] = useState()
    const [doubleBed, setDoubleBed] = useState("")
    const [singleBed, setSingleBed] = useState("")
    const [daily, setDaily] = useState("")
    const [name, setName] = useState("")
    const [hoteis, setHoteis] = useState([])



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
            hotelId: hotel,
            doubleBed: parseInt(doubleBed),
            singleBed: parseInt(singleBed),
            daily: parseFloat(daily),
            name
        }

        const res = await axios.post("http://localhost:8080/api/room", data, config);
        if (res.status === 201)
            props.navigation.navigate("HomeADM");
    }


    useEffect(async function getHoteis() {
        const res = await axios.get("http://localhost:8080/api/hotel");
        console.log(res)
        setHoteis(res.data)
    }, [])
    useEffect(() => {
        console.log(hoteis)
    }, [hoteis])


    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
            <Text style={styleCadastroQuarto.title}>Cadastrar Quarto</Text>

            <Text style={styleCadastroQuarto.label}>Hotel:</Text>
            <Picker
                selectedValue={hotel}
                style={styleCadastroQuarto.select}
                onValueChange={(itemValue, _) =>
                    setHotel(parseInt(itemValue))
                }>
                {hoteis.map((h) => <Picker.Item label={h.name} value={h.id} />)}
            </Picker>

            <TextInput
                label="Double Bed"
                onChangeText={(text) => setDoubleBed(text)}
                mode="outlined"
                style={styleCadastroQuarto.input} />

            <TextInput
                label="Single Bed"
                onChangeText={(text) => setSingleBed(text)}
                mode="outlined"
                style={styleCadastroQuarto.input} />

            <TextInput
                label="Daily"
                onChangeText={(text) => setDaily(text)}
                mode="outlined"
                style={styleCadastroQuarto.input} />

            <TextInput
                label="Name"
                onChangeText={(text) => setName(text)}
                mode="outlined"
                style={styleCadastroQuarto.input} />


            <Button mode="contained" onPress={() => cadastrar()} style={styleCadastroQuarto.button}>
                Cadastrar
            </Button>
        </ImageBackground>
    )
}


const styleCadastroQuarto = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
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
        marginTop: 40,
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
        fontSize: "20px"
    }
})