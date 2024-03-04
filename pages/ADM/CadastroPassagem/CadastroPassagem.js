import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Image} from "react-native";
import Backarrow from "../../../components/BackArrow/backarrow"

export function CadastroPassagem(props) {
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
            
        </ImageBackground>
    )
}


const styleCadastroPassagem = StyleSheet.create({
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