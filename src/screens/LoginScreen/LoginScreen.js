import React, { useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSingUpPress = () => {
    navigation.navigate("Registration");
  };

  const handleLogin = () => {
    alert("Nice, you pressed a button!");
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/LoginScreen-bg.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.input}
          textAlign="center"
          value={email}
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          style={styles.input}
          textAlign="center"
          value={password}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, { marginTop: 5, marginBottom: 20 }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, { color: "white" }]}>
            Don't have an account?{" "}
          </Text>
          <Text
            onPress={onSingUpPress}
            style={[styles.footerText, { color: "red" }]}
          >
            Sign up
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}