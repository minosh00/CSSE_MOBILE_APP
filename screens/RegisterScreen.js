import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";
import registerStyles from "../styles/register";

const RegisterScreen = ({ navigation }) => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [compName, setCompName] = useState("");
  const [supAddress, setSupAddress] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");

  const registerUser = () => {
    const URL = "https://backendhostings.herokuapp.com/user/signup";

    const payload = {
      name: name,
      email: email,
      companyName: compName,
      password: pwd,
      userRole: role,
      supplierAddress: supAddress,
    };
    console.log(payload);

    axios
      .post(URL, payload)
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          "Error",
          "Registration Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <View style={registerStyles.regPage}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={{ width: "80%" }}>
        <View style = {{backgroundColor: 'white', height: '100%'}}>
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setName(e.nativeEvent.text)}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setRole(e.nativeEvent.text)}
            value={role}
            placeholder="User Role"
          />
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setCompName(e.nativeEvent.text)}
            value={compName}
            placeholder="Company Name"
          />
          <TextInput
            style={commonStyles.textView}
            onChange={(e) => setSupAddress(e.nativeEvent.text)}
            value={supAddress}
            placeholder="Address"
          />
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
          <TextInput
            secureTextEntry
            style={commonStyles.textView}
            onChange={(e) => setCpwd(e.nativeEvent.text)}
            value={cpwd}
            placeholder="Confirm Password"
          />
          {pwd !== cpwd && pwd !== "" && cpwd !== "" ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Passwords are not matching!
            </Text>
          ) : (
            <Text> </Text>
          )}

          <TouchableOpacity
            style={commonStyles.button}
            disabled={pwd !== cpwd}
            onPress={() => {
              registerUser();
            }}
          >
            <Text style={commonStyles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Button title="Login" onPress={() => navigation.navigate("Login")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
