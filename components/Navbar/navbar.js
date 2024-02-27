import { BackHandler, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";


export default function Navbar() {
    const navigation = useNavigation()
    return (
        <View style={styleNav.all}>

            <View style={styleNav.one}>
                <TextInput
                    style={styleNav.styleinput}
                    multiline
                    maxLength={20}
                    numberOfLines={2}
                    width={10}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={styleNav.two}>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                    <Icon
                        source="filter"
                        size={50}
                    />
                </TouchableOpacity>
            </View>

            <View style={styleNav.three}>
                <TouchableOpacity onPress={() => navigation.navigate("User")} >
                    <Icon
                        source="account-circle"
                        size={50}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styleNav = StyleSheet.create({
    styleinput: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        height: 50,

        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 6, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        borderColor: "gray",
        borderWidth: 0.5
    },

    all: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    two: {
        marginTop: 10,
    },

    three: {
        marginTop: 10
    }

})