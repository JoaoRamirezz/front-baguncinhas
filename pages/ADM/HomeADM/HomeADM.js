import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-paper';

export function HomeADM(props) {
    return (
        <ImageBackground
            source={require('../../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={{margin: "1em"}}>
                <Icon
                    source="logout"
                    color="black"
                    size={30}
                />
            </TouchableOpacity>

            <Text style={styleHomeADM.title}>Ações administrativas</Text>
            <TouchableOpacity style={styleHomeADM.option} onPress={() => props.navigation.navigate("CadastroHotel")}>
                <Icon
                    source="room-service"
                    color="black"
                    size={30}
                />
                <Text style={styleHomeADM.textOption}>Cadastrar Hotel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styleHomeADM.option} onPress={() => props.navigation.navigate("CadastroQuarto")}>
                <Icon
                    source="bed-king"
                    color="black"
                    size={30}
                />
                <Text style={styleHomeADM.textOption}>Cadastrar Quarto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styleHomeADM.option} onPress={() => props.navigation.navigate("CadastroPassagem")}>
                <Icon
                    source="ticket-confirmation"
                    color="black"
                    size={30}
                />
                <Text style={styleHomeADM.textOption}>Cadastrar Passagem</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styleHomeADM.option} onPress={() => props.navigation.navigate("CadastroPacote")}>
                <Icon
                    source="wallet-travel"
                    color="black"
                    size={30}
                />
                <Text style={styleHomeADM.textOption}>Cadastrar Pacote</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}


const styleHomeADM = StyleSheet.create({
    title: {
        fontSize: "28px",
        fontWeight: "700",
        alignSelf: "center",
        marginVertical: "2em"
    },
    option:{
        display: "flex",
        flexDirection: "row",
        alignSelf:"center",
        backgroundColor: "#F8D4C0",
        borderRadius: 15,
        width: "70%",
        justifyContent: "space-around",
        paddingHorizontal: "1em",
        paddingVertical: "3em",
        marginBottom: "2em"
    },
    textOption:{
        fontSize: "20px",
        fontWeight: "700"
    }
})