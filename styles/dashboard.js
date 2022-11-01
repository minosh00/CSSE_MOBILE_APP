import { StyleSheet } from "react-native";
import Colors from "./Colors";

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    card: {
        backgroundColor: Colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        margin: 4,
        borderRadius: 23
    }
})

export default dashboardStyles