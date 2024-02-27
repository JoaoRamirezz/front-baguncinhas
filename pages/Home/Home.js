import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import Navbar from "../../components/Navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home(props) {
    const [hoteis, setHoteis] = useState([])

    // useEffect(() => {
    //     async function getData() {
    //         const res = await axios.get('http://localhost:8080/api/hotel/')
    //         setHoteis(res.data)
    //     }

    //     getData()
    // }, [])

    return (
        <>
            <ImageBackground
                source={require('../../assets/Bgs/BackgroundColor.png')}
                style={{ width: 400, height: 1000 }}
            >
                <Navbar />
                <View style={styleHome.bg}>
                    {hoteis.map((hotel, index) => {
                        return (
                            <View style={styleHome.Hotel} key={index}>
                                <Image
                                    style={styleHome.HotelImg}
                                    source={require('../../assets/image3.png')}
                                />

                                <Text style={styleHome.HotelName}>{hotel.name}</Text>
                                <Text style={styleHome.HotelDate}>5-10 nov</Text>
                                <Text style={styleHome.HotelPrice}>R$ {hotel.bestPrice}.00</Text>
                                <TouchableOpacity style={styleHome.HotelButton}>
                                    <Text style={styleHome}>Reservar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}


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
                    </View>
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