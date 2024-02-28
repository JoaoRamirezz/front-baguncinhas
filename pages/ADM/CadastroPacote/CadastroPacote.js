import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow"

export function CadastroPacote(props) {
    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
             <Text style={styleCadastroPacote.title}>Cadastrar Pacote</Text>
        </ImageBackground>
    )
}


const styleCadastroPacote = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    }
})