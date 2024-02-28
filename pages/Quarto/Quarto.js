import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Image } from "react-bootstrap";
import { Icon, MD3Colors } from 'react-native-paper';
import { TouchableOpacity } from "react-native-web";

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

            <View style={styleQuarto.infos}>
                <Icon
                    source="bed-king"
                    color="black"
                    size={40}
                />
                <Text style={styleQuarto.text}>Camas de casal</Text>
                <Text style={styleQuarto.qtd}>2</Text>
            </View>

            <View style={styleQuarto.infos}>
                <Icon
                    source="bed-queen"
                    color="black"
                    size={40}
                />
                <Text style={styleQuarto.text}>Camas de solteiro</Text>
                <Text style={styleQuarto.qtd}>2</Text>
            </View>

            <View style={styleQuarto.footer}>
                <Text style={styleQuarto.dados}>4 pessoas, 5 diárias</Text>
                <Text style={styleQuarto.dados}>Dia 5/11 - 11/11</Text>
                <TouchableOpacity style={styleQuarto.confirm}>Confirmar Hotel</TouchableOpacity>
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
    footer: {
        backgroundColor: "#AF714F",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "50%",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    infos: {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        alignSelf: "center",
        marginVertical: "2em",
        verticalAlign: "middle"
    },
    text: {
        fontSize: "20px",
        fontWeight: "600",
        verticalAlign: "middle"

    },
    qtd: {
        fontSize: "20px",
        fontWeight: "600",
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: "1em",
        verticalAlign: "middle"
    },
    dados: {
        color: "white",
        fontSize: "25px",
        alignSelf: "center",
        marginTop: "3em"
    },
    confirm: {
        color: "#352218",
        backgroundColor: "#EABDA4",
        borderRadius: 15,
        padding: "1em",
        width: "40%",
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: "2em"
    }
})