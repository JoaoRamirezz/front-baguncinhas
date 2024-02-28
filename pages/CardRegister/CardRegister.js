import { Text } from "react-native"
import Backarrow from "../../components/BackArrow/backarrow"
import { TextInput } from "react-native-paper"

export function CardRegister() {
    return (
        <>
            <Backarrow />
            <Text style={{ fontSize: 25, alignSelf: "center" }}>
                Cadastrar Cartão
            </Text>
            
            <TextInput
                style={{ width: "80%", alignSelf: "center" }}
                label="Numero do cartão"
            />
        </>
    )
}