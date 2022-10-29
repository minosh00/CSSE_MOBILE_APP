import { StyleSheet } from "react-native";
import Colors from "./Colors";

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        backgroundColor: Colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        margin: 4,
        borderRadius: 12
    }
})

export default dashboardStyles