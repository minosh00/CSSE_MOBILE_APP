import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginTop: 12,
        borderRadius: 50,
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textView: {
        backgroundColor: Colors.inputBG,
        marginVertical: 4,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        fontSize: 16,
        color: Colors.primary,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})

export default commonStyles;