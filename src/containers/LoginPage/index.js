import React, { Component } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import PageStyle from "./styles";

class LoginPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is a Login Page</Text>
      </View>
    );
  }
}

export default LoginPage;
