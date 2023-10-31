

import { BackHandler, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Navbar(props) {
    return (
        <View style = {styleNav.all}>

            <View style = {styleNav.one}>
                <TextInput
                    style={styleNav.styleinput}
                    multiline
                    maxLength={20}
                    numberOfLines={2}
                    width={10}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style = {styleNav.two}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Filter")}>
                    <Ionicons name="filter-outline" size={32} color="black"
                     />
                </TouchableOpacity>
            </View>

            <View style = {styleNav.three}>
                <TouchableOpacity onPress={() => props.navigation.navigate("User")} >
                    <Ionicons name="person-circle-outline" size={50} color="black"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styleNav = StyleSheet.create ({
    styleinput:{
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        height: 50,

        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: 6, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,

        borderColor: "gray",
        borderWidth: 0.5
    },

    all: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#EBF8F7"
    },

    two: {
        marginTop: 17,
    },

    three: {
        marginTop: 10
    }

})