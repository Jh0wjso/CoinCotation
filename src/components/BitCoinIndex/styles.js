import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textoInicial:{
        fontWeight: "bold",
        color: "#fff",
        fontSize: 30,
        marginBottom: 10,
    },
    principal: {
        backgroundColor: "tomato",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textoPrincipal:{      
        color: "#000000",
        fontWeight: "bold",
    },
    infomation:{
        width:"95%",
        height:"auto",
        backgroundColor:"#fff",
        marginLeft:"3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    contentLeft:{
        width: "36%",
        alignItems: "flex-start"
    },
    contentRight:{
        width: "60%",
        alignItems: "flex-end"
    },
})

export default styles;