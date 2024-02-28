import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from "react-native"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import Backarrow from "../../components/BackArrow/backarrow"


export function Card() {
    const navigation = useNavigation()
    return (
        <ImageBackground
            source={require('../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />

            <Text style={{ fontSize: 25, alignSelf: "center" }}>
                Formas de Pagamento
            </Text>

            <View style={styleUser.Card}>
                <Text style={{fontSize:18}}>Cartão Mídia - Credito</Text>
                <Text style={{fontSize:18}}>**** 6789</Text>
            </View>
            <View style={styleUser.Card}>
                <Text style={{fontSize:18}}>Cartão Mídia - Credito</Text>
                <Text style={{fontSize:18}}>**** 6789</Text>
            </View>
            <View style={styleUser.Card}>
                <Text style={{fontSize:18}}>Cartão Mídia - Credito</Text>
                <Text style={{fontSize:18}}>**** 6789</Text>
            </View>

            <Button mode="contained" style={{ marginTop: 15 , width: "80%", alignSelf:"center", borderRadius:5}} buttonColor={"#AF714F"} onPress={() => navigation.navigate("CardRegister")}>
                    +
            </Button>

        </ImageBackground>
    )
}

const styleUser = StyleSheet.create({
    Card: {
        marginTop: 20,
        width: "80%",
        alignSelf: "center",
        padding: 20,
        backgroundColor: "#F8E5DA",
        borderRadius:5
    }
})