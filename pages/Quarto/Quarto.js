import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Image } from "react-bootstrap";

export function Quarto(props) {
    return (
        <> <ImageBackground
            source={require('../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <View style={styleQuarto.flexDiv}>
                <Image
                    style={styleQuarto.QuartoImg}
                    source={require('../../assets/map.png')} />
                <View>
                    <Text style={styleQuarto.NomeHotel}>Hotel Bonito</Text>
                    <Text style={styleQuarto.NomeQuarto}>Quarto Luz</Text>
                    <Text style={styleQuarto.ValorDiaria}>R$ 450,00 /por noite</Text>
                </View>
            </View>

            <View style={styleQuarto.footer}>

            </View>
        </ImageBackground>
        </>
    )
}

const styleQuarto = StyleSheet.create({
    QuartoImg: {
        width: 150,
        height: 100,
        borderRadius: 10,
        alignSelf: "center",
        marginRight: "2em"
    },
    flexDiv: {
        marginTop: "2.5em",
        display: "flex",
        flexDirection: "row",
        alignSelf: "center"
    },
    NomeHotel: {
        fontSize: "20px",
        fontWeight: "bold"
    },
    NomeQuarto: {
        fontSize: "15px"
    },
    ValorDiaria: {
        color: "#AF714F",
        fontWeight: "bold",
        fontSize: "15px"
    },
    footer:{
        backgroundColor: "#AF714F",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "60%",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
})