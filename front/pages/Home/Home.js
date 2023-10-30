import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useContext } from "react";
import { utilsContext } from "../../contexts/SignUpContext";
import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";

export function Home(props) {
    return (
        <>
            <Navbar/>
        </>
    )
}