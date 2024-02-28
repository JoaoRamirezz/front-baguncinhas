import { TouchableOpacity } from "react-native"
import {Icon} from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

export default function Backarrow() {
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                    source="arrow-left"
                    size={30}
                />
            </TouchableOpacity>
        </>
    )
}
