import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";
import loginStyles from "../styles/login";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const loginUser = () => {
    const URL = `https://backendhostings.herokuapp.com/user/signin`;
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
      <ScrollView style={{ width: "80%" }}>
        <View>
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

          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => {
              loginUser();
            }}
          >
            <Text style={commonStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
