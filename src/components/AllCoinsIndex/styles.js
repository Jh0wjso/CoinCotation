import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textoPrincipal:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    mainContent:{
        backgroundColor: "tomato",
        width: "100%",
        height: "100%",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonCoinsList:{
        width: "95%",
        marginTop: 10
    },
    buttonCoin:{
        backgroundColor: "#fff",
        borderRadius: 5,
        width: "100%",
        height: "auto",
        fontSize: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    buttonText:{
        color: "tomato",
        fontSize: 25,
        padding: 10
    }
})

export default styles;