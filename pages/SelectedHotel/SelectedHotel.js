import { View,StyleSheet } from "react-native";

import { useState } from "react";
import { Image } from "react-bootstrap";


export function SelectedHotel(props) {
    return(
        <View style={styleSelectedHotel.bg}>
            <Image/>
            <Text>Hotel Bonito</Text>
            <Text>5-10 nov</Text>

        </View>
    )

}


const styleSelectedHotel = StyleSheet.create({
    bg: {
        backgroundColor: "#EBF8F7",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      },


})