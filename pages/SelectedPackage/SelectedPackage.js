import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import Navbar from "../../components/Navbar/navbar";
import { Image } from "react-bootstrap";
import { Icon } from "react-native-paper"
import { useNavigation } from "@react-navigation/native";
import Backarrow from "../../components/BackArrow/backarrow";


export function SelectedPackage(props) {
    const navigation = useNavigation()
    return (
        <ImageBackground
            source={require('../../assets/Bgs/BackgroundSelectedPackage.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow/>
            <Navbar />

            <Text style={styleSelectedPackage.title}>Detalhes do Pacote</Text>
            <Text style={styleSelectedPackage.destiny}>São Paulo - Curitiba</Text>

            <View style={styleSelectedPackage.brownDiv}>
                <Text style={styleSelectedPackage.SessionTitle}>HOTEL</Text>
                <Image
                    style={styleSelectedPackage.HotelImg}
                    source={require('../../assets/image3.png')} />
                <Text style={styleSelectedPackage.HotelName}>Hotel Bonito</Text>
                <TouchableOpacity style={styleSelectedPackage.HotelVerMais} onPress={() => props.navigation.navigate("SelectedHotel")}>Ver mais detalhes</TouchableOpacity>
            </View>

            <View style={styleSelectedPackage.grayDiv}>
                <Text style={styleSelectedPackage.SessionTitle}>VOO</Text>
                <Text style={styleSelectedPackage.negrito}>Ida: <Text style={styleSelectedPackage.normal}>6 nov - 22:30</Text></Text>
                <Text style={styleSelectedPackage.negrito}>Volta: <Text style={styleSelectedPackage.normal}>10 nov - 10:00</Text></Text>
                <Text style={styleSelectedPackage.negrito}>Tipo: <Text style={styleSelectedPackage.normal}>Avião</Text></Text>
                <Text style={styleSelectedPackage.negrito}>Classe: <Text style={styleSelectedPackage.normal}>Econômica</Text></Text>
                <TouchableOpacity style={styleSelectedPackage.Escolher} onPress={() => props.navigation.navigate("EscolherHorario")}>Escolher outro horário</TouchableOpacity>
            </View>

            <View style={styleSelectedPackage.whiteDiv}>
                <Text style={styleSelectedPackage.SessionTitle}>RESUMO</Text>
                <View style={styleSelectedPackage.resumo}>
                    <Text>Valor Total</Text>
                    <Text style={styleSelectedPackage.value}>R$ 1980,00</Text>
                </View>
                <TouchableOpacity style={styleSelectedPackage.reservar}>Reservar</TouchableOpacity>
            </View>

        </ImageBackground>
    )

}


const styleSelectedPackage = StyleSheet.create({
    title: {
        fontSize: "25px",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: "1em"
    },
    destiny: {
        fontSize: "20px",
        alignSelf: "center",
        marginBottom: "1em"
    },
    brownDiv: {
        backgroundColor: "#AF714F",
        width: '80%',
        alignSelf: "center",
        padding: "1em",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    SessionTitle: {
        fontWeight: "bold",
        alignSelf: "center"
    },
    HotelImg: {
        width: 200,
        height: 150,
        borderRadius: 10,
        alignSelf: "center"
    },
    HotelName: {
        fontSize: "15px",
        fontWeight: "500",
        alignSelf: 'center'
    },
    HotelVerMais: {
        fontSize: "10px",
        alignSelf: 'center'
    },
    grayDiv: {
        backgroundColor: "#D9D9D9",
        width: '80%',
        alignSelf: "center",
        padding: "1em",
    },
    negrito: {
        fontWeight: "bold"
    },
    normal: {
        fontWeight: "normal"
    },
    Escolher: {
        backgroundColor: "#414141",
        borderRadius: 10,
        padding: "0.5em",
        margin: "0.5em",
        width: "60%",
        textAlign: "center",
        alignSelf: "center",
        color: "white",
        fontSize: "15px"
    },
    whiteDiv: {
        backgroundColor: "#FFFFFF",
        width: '80%',
        alignSelf: "center",
        padding: "1em",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    value: {
        textDecorationLine: 'underline',
        fontWeight: "bold",
        color: "black"
    },
    resumo: {
        display: "flex",
        justifyContent: "space-between",
        color: "#414141",
        flexDirection: "row",
        marginVertical: "2em"
    },
    reservar: {
        backgroundColor: "#4DCC4B",
        padding: ".8em",
        width: "60%",
        textAlign: "center",
        alignSelf: "center",
        borderRadius: 10
    }

})