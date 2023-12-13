import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'azure',
    },
    text:{
        fontFamily:'Segoe UI',
        fontSize:15,
        fontWeight:'bold',
        color:'red',
        justifyContent:'center'
    },
    textInput:{
        height:40,
        fontSize:15,
        fontWeight:'bold',
        color:'cyan',
        backgroundColor:'lightyellow',
    },
    disableTextInput:{
        height:40,
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'black',
    },
    textItem:{
        fontSize:10,
        fontWeight:'normal',
        color:'black'
    },
    textHeader:{
        color:'red',
        fontSize:25,
        textAlign:'center',
        marginBottom:20
    }
})