import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";

export function CadastroPassagem(props) {
    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
             <Text style={styleCadastroPassagem.title}>Cadastrar Passagem</Text>
        </ImageBackground>
    )
}


const styleCadastroPassagem = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    }
})