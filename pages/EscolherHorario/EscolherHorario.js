import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { List } from 'react-native-paper';
import Backarrow from "../../components/BackArrow/backarrow"


export function EscolherHorario(props) {
    return (
        <ImageBackground
            source={require('../../assets/Bgs/BackgroundColor.png')}
            style={{ width: 400, height: 1000 }}
        >
            <Backarrow />
            <View style={{ width: "75%", alignSelf: "center" }}>
                <Text style={styleescolherHorario.title}>Horários de Voo</Text>
                <List.AccordionGroup >
                    <List.Accordion title="Ida" id="1" left={props => <List.Icon {...props} icon="airplane-takeoff" />}>
                        <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>
                    </List.Accordion>

                    <List.Accordion title="Volta" id="2" left={props => <List.Icon {...props} icon="airplane-landing" />}>
                       <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleescolherHorario.item}>
                            <Text>10 nov</Text>
                            <Text>10:00</Text>
                            <Text>R$ 700,00</Text>
                        </TouchableOpacity>
                    </List.Accordion>
                </List.AccordionGroup>
            </View>
        </ImageBackground>
    )
}



const styleescolherHorario = StyleSheet.create({
    item: {
        backgroundColor: "#F8E5DA",
        display: "flex",
        flexDirection: "row",
        fontSize: "20px",
        padding: "1em",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: '#EABDA4',
    },
    title:{
        fontSize: "28px",
        fontWeight: "700",
        alignSelf:"center",
        marginVertical: "2em"
    }
})