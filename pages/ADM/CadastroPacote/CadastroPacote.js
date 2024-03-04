import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow"

export function CadastroPacote(props) {
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
        alignSelf:"center"
    },
})