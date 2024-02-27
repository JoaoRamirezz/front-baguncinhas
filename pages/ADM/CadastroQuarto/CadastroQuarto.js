import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";

export function CadastroQuarto(props) {
    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
             <Text style={styleCadastroQuarto.title}>Cadastrar Quarto</Text>
        </ImageBackground>
    )
}


const styleCadastroQuarto = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    }
})