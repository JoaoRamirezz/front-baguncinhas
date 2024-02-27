import { BackHandler, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Icon, Button, MD3Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


export function UserPage() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon
                    source="arrow-left"
                    size={50}
                />
            </TouchableOpacity>

            <View style = {styleUser.all}>
                <Icon
                    source="account-circle"
                    size={350}
                />
                <Text style={{fontSize: 40}}>
                    Fulano Ciclano
                </Text>

                <Text style={{fontSize: 15, marginTop:15}}>
                    Contato: <b>(41) 99998-7888</b>
                </Text>

                <Text style={{fontSize: 15, marginTop:15}}>
                    Email: <b>fulanociclano@email.com</b>
                </Text>

                <Button mode="contained" style={{marginTop: 15}} buttonColor={"#AF714F"}>
                    Editar
                </Button>

                <Button mode="contained" style={{marginTop: 15}} buttonColor={"#AF714F"}>
                    Reservas
                </Button>

                <Button mode="contained" style={{marginTop: 15}} buttonColor={"#AF714F"} onPress={() => navigation.navigate("Cartoes")}>
                    Cartões
                </Button>
            </View>

        </>
    )
}

const styleUser = StyleSheet.create({
    all: {
    alignItems:"center"
    }
})