import React, { Component } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import PageStyle from "./styles";

class SignUpPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is a Sign-Up Page</Text>
      </View>
    );
  }
}

export default SignUpPage;
