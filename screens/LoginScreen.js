import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";
import loginStyles from "../styles/login";

const LoginScreen = ({ navigation }) => {

  // states
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  //function to log an user in
  const loginUser = () => {
    //backend URL
    const URL = `https://backendhostings.herokuapp.com/user/signin`;

    //network call to above URL
    axios
      .post(URL, { email: email, password: pwd })
      .then((res) => {
        navigation.navigate("Dashboard", {
          userID: res.data.userId,
          userRole: res.data.userRole,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={loginStyles.logPage}>
      <Image
        source={require("../assets/Images/LoginBackground.png")}
        style={{ width: "100%", height: "40%" }}
        resizeMode = "contain"
      />
      {/* Login form */}
      <ScrollView style={{ width: "80%" }}>
          <TextInput
            keyboardType="email-address"
            style={commonStyles.textView}
            onChange={(e) => setEmail(e.nativeEvent.text)}
            value={email}
            placeholder="E-mail Address"
          />
          <TextInput
            secureTextEntry
            style={commonStyles.textView}
            onChange={(e) => setPwd(e.nativeEvent.text)}
            value={pwd}
            placeholder="Password"
          />

          {/* submit button with loginUser function */}
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => {
              loginUser();
            }}
          >
            <Text style={commonStyles.buttonText}>Login</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
