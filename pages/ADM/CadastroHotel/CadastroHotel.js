import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";

export function CadastroHotel(props) {
    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
             <Text style={styleCadastroHotel.title}>Cadastrar Hotel</Text>
        </ImageBackground>
    )
}


const styleCadastroHotel = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    }
})