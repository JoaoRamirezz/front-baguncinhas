import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Navbar from "../../components/Navbar/navbar";

import { useState } from "react";
import { Image } from "react-bootstrap";


export function SelectedPackage(props) {
    return (
        <ImageBackground
            source={require('../../assets/Bgs/BackgroundSelectedPackage.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Navbar />

            <Text style={styleSelectedPackage.title}>Detalhes do Pacote</Text>
            <Text style={styleSelectedPackage.destiny}>São Paulo - Curitiba</Text>

            <View style={styleSelectedPackage.brownDiv}>
                <Text style={styleSelectedPackage.brownTitle}>HOTEL</Text>
            </View>
        </ImageBackground>
    )

}


const styleSelectedPackage = StyleSheet.create({
    title: {
        fontSize: "25px",
        fontWeight: "bold",
        alignSelf: "center"
    },
    destiny: {
        fontSize: "20px",
        alignSelf: "center"
    },
    brownDiv: {
        backgroundColor: "#AF714F",
        borderRadius: 20,
        width: '70%',
        alignSelf: "center",
        padding: "1em"
    },
    brownTitle: {
        fontWeight: "bold"
    }


})