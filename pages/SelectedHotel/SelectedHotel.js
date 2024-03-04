import { Image } from "react-bootstrap";
import Navbar from "../../components/Navbar/navbar";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Backarrow from "../../components/BackArrow/backarrow";

export function SelectedHotel(props) {
    return (
        <>
            <ImageBackground
                source={require('../../assets/Bgs/BackgroundColor.png')}
                style={{ width: 400, height: 1000 }}>
                    <Backarrow />
                <Navbar />

                <Image
                    style={styleSelectedHotel.HotelImg}
                    source={require('../../assets/image3.png')} />
                <View style={styleSelectedHotel.infos}>
                    <Text style={styleSelectedHotel.Nome}>Hotel Bonito</Text>
                    <Text style={styleSelectedHotel.Data}>5 nov - 10 nov</Text>
                    <Text style={styleSelectedHotel.Quartos}>5 Hospedes - 2 Quartos</Text>
                </View>


                <Image
                    style={styleSelectedHotel.HotelAdress}
                    source={require('../../assets/map.png')} />

                <Text style={{ alignSelf: "center", fontSize: "15px", marginTop: "2em" }}>Contato: <Text style={styleSelectedHotel.negrito}>(41) 99876-4510</Text></Text>
                <Text style={{ alignSelf: "center", fontSize: "15px" }}>Email: <Text style={styleSelectedHotel.negrito}>hotelbonito@hotel.com</Text></Text>
                <TouchableOpacity style={styleSelectedHotel.verQuartos} onPress={() => props.navigation.navigate("SelectedRoom")}>Ver quartos</TouchableOpacity>
            </ImageBackground>
        </>
    )
}



const styleSelectedHotel = StyleSheet.create({
    HotelImg: {
        width: 300,
        height: 250,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "2em"
    },
    HotelAdress: {
        width: 300,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: "2em"
    },
    Nome: {
        fontSize: "25px"
    },
    Data: {
        fontSize: "20px"
    },
    Quartos: {
        fontSize: "18px"
    },
    negrito: {
        fontWeight: "bold"
    },
    verQuartos: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingHorizontal: "1em",
        paddingVertical: "0.5em",
        width: "30%",
        alignSelf: "center",
        marginVertical: "2em"
    },
    infos:
    {
        marginHorizontal: "18%"
    }
})