import { TouchableOpacity, Text, View, StyleSheet } from "react-native"
import { Icon } from "react-native-paper"

export function Cartoes() {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("UserPage")}>
                <Icon
                    source="arrow-left"
                    size={50}
                />
            </TouchableOpacity>

            <Text style={{fontSize: 25, alignSelf: "center"}}>
                Formas de Pagamento
            </Text>

            <View>

            </View>
        </>
    )
}

const styleUser = StyleSheet.create({
    all: {
    alignItems:"center"
    }
})