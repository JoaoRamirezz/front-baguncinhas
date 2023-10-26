import { StyleSheet } from "react-native-web";


const styleSignUp = StyleSheet.create({
    input: {
      height: 40,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
    },
  
    bg: {
      backgroundColor: "lightgray",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  
    bgUsers: {
      backgroundColor: "lightgray",
      height: "100%",
    },
  
    inputs1: {
      flexDirection: "row",
      alignItems: "center",
    },
  
    textView: {
      marginLeft: 40,
      marginTop: 20,
    },
  
    switch: {
      marginLeft: 12,
    },
  
    button: {
      padding: 10,
      margin: 12,
      backgroundColor: "white",
    },
    button1: {
      padding: 10,
      margin: 12,
    },
  
    textbutton: {
      textAlign: "center",
    },
  
    buttonLogin: {
      display: "flex",
      justifyContent: "flex-end",
    },
  
    title: {
      marginTop: "10%",
      marginBottom: "10%",
      fontSize: 100,
      textAlign: "center",
    },
  
    titleUsers: {
      fontSize: 70,
    },
  });

  export default styleSignUp;