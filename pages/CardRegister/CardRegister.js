import { Text, StyleSheet, View, ImageBackground, Image } from "react-native"
import Backarrow from "../../components/BackArrow/backarrow"
import { TextInput, Button } from "react-native-paper"
import { useState } from "react"

export function CardRegister() {
    const [cardNumber, setNumber] = useState("")
    const [validity, setVal] = useState("")
    const [cvv, setCvv] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [nickname, setNickname] = useState("")
    return (
        <ImageBackground
            source={require('../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >

            <Backarrow />
            <Text style={{ fontSize: 25, alignSelf: "center" }}>
                Cadastrar Cartão
            </Text>

            <TextInput
                label="Numero do cartão"
                onChangeText={(text) => setNumber(text)}
                mode="outlined"
                style={styleCard.input}
            />

            <View style={styleCard.twoInputs}>
                <TextInput
                    label="Validade"
                    onChangeText={(text) => setVal(text)}
                    mode="outlined"
                    style={styleCard.inputPass}
                />

                <TextInput
                    label="CVV"
                    onChangeText={(text) => setCvv(text)}
                    mode="outlined"
                    style={styleCard.inputPass}
                />
            </View>

            <TextInput
                label="Nome do Titular"
                onChangeText={(text) => setName(text)}
                mode="outlined"
                style={styleCard.input}
            />

            <TextInput
                label="CPF do Titular"
                onChangeText={(text) => setCpf(text)}
                mode="outlined"
                style={styleCard.input}
            />

            <TextInput
                label="Apelido do cartão"
                onChangeText={(text) => setNickname(text)}
                mode="outlined"
                style={styleCard.input}
            />

            <Button mode="contained" style={{ marginTop: 15, width: "80%", alignSelf: "center", borderRadius: 5 }} buttonColor={"#AF714F"} onPress={() => navigation.navigate("CardRegister")}>
                Cadastrar
            </Button>
        </ImageBackground>

    )
}

const styleCard = StyleSheet.create({

    input: {
        height: 30,
        alignSelf: "center",
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: 'rgba(255,255,255,0.5)',
        marginTop: 20,
        borderRadius: 20,
        width: 300
    },

    twoInputs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "80%",
        alignSelf: "center"
    },

    inputPass: {
        height: 30,
        alignSelf: "center",
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: 'rgba(255,255,255,0.5)',
        marginTop: 20,
        borderRadius: 20,
        width: 145
    },
})