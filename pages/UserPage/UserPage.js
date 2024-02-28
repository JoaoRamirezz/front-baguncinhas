import { BackHandler, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon, Button, MD3Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Backarrow from "../../components/BackArrow/backarrow";


export function UserPage() {
    const navigation = useNavigation()
    return (
        <>
            <Backarrow />
            <View style={styleUser.all}>
                <Icon
                    source="account-circle"
                    size={350}
                />
                <Text style={{ fontSize: 40 }}>
                    Fulano Ciclano
                </Text>

                <Text style={{ fontSize: 15, marginTop: 15 }}>
                    Contato: <b>(41) 99998-7888</b>
                </Text>

                <Text style={{ fontSize: 15, marginTop: 15 }}>
                    Email: <b>fulanociclano@email.com</b>
                </Text>

                <Button mode="contained" style={{ marginTop: 15 }} buttonColor={"#AF714F"}>
                    Editar
                </Button>

                <Button mode="contained" style={{ marginTop: 15 }} buttonColor={"#AF714F"}>
                    Reservas
                </Button>

                <Button mode="contained" style={{ marginTop: 15 , width: "80%", alignSelf:"center", borderRadius:5}} buttonColor={"#AF714F"} onPress={() => navigation.navigate("Cards")}>
                    Cartões
                </Button>
            </View>

        </>
    )
}

const styleUser = StyleSheet.create({
    all: {
        alignItems: "center"
    }
})