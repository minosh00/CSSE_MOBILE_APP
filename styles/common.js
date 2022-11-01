import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 4,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "#FF9720",
    paddingVertical: 10,
    borderRadius: 23,
  },
  textView: {
    backgroundColor: "white",
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    color: Colors.primary,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderWidth: 2,
    marginTop: 10,
    borderColor: "#00716F",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default commonStyles;
