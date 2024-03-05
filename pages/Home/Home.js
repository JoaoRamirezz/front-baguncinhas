import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import Navbar from "../../components/Navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home(props) {
    const [pacotes, setPacotes] = useState([])

    const pacotess = [
        {
          "ida": "São Paulo",
          "volta": "Curitiba",
          "idaData": "5",
          "voltaData": "10",
          "preço": "1980,00"
        },
        {
          "ida": "Rio de Janeiro",
          "volta": "Florianópolis",
          "idaData": "8",
          "voltaData": "15",
          "preço": "2200,00"
        },
        {
          "ida": "Belo Horizonte",
          "volta": "Porto Alegre",
          "idaData": "12",
          "voltaData": "20",
          "preço": "2500,00"
        },
        {
          "ida": "Brasília",
          "volta": "Salvador",
          "idaData": "10",
          "voltaData": "18",
          "preço": "1800,00"
        },
        {
          "ida": "Recife",
          "volta": "Fortaleza",
          "idaData": "6",
          "voltaData": "14",
          "preço": "2100,00"
        }
      ];
      

    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:8080/api/package/')
            setPacotes(res.data)
        }

        getData()
    }, [])

    return (
        <>
            <ImageBackground
                source={require('../../assets/Bgs/BackgroundColor.png')}
                style={{ width: 400, height: 1000 }}
            >
                <Navbar />
                <View style={styleHome.bg}>
                    {pacotess.map((pacotess, index) => {
                        return (
                            <View style={styleHome.Hotel} key={index}>
                                <Image
                                    style={styleHome.HotelImg}
                                    source={require('../../assets/image3.png')}
                                />

                                <Text key={index} style={styleHome.HotelName}>{pacotess.ida} - {pacotess.volta}</Text>
                                <Text key={index} style={styleHome.HotelDate}>{pacotess.idaData} - {pacotess.voltaData} Nov</Text>
                                <Text key={index} style={styleHome.HotelPrice}>{pacotess.preço}</Text>
                                <TouchableOpacity style={styleHome.HotelButton}onPress={() => props.navigation.navigate("SelectedPackage")}>
                                    <Text style={styleHome}>Reservar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}

                    {/* 
                    <View style={styleHome.Hotel}>
                        <Image
                            style={styleHome.HotelImg}
                            source={require('../../assets/image3.png')}
                        />

                        <Text style={styleHome.HotelName}>Hotel Bonito</Text>
                        <Text style={styleHome.HotelDate}>5-10 nov</Text>
                        <Text style={styleHome.HotelPrice}>R$1980,00</Text>
                        <TouchableOpacity style={styleHome.HotelButton} onPress={() => props.navigation.navigate("SelectedPackage")}>
                            <Text style={styleHome}>Ver Mais</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </ImageBackground>
        </>
    )
}

const styleHome = StyleSheet.create({
    Hotel: {
        paddingTop: 20,
    },

    HotelButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        padding: 5,
        width: "23%",
        marginTop: 5
    },

    HotelImg: {
        width: 300,
        height: 250,
        borderRadius: 10
    },
    HotelName: {
        fontSize: 20,
    },
    HotelDate: {

    },
    HotelPrice: {
        fontSize: 15,
        textDecorationLine: 'underline'
    },

    bg: {
        alignItems: "center",
        backgroundColor: "#EABDA4",
        // height: "100%"
    }


})