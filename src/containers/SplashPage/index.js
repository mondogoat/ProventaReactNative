import React, { Component } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import PageStyle from "./styles";

class SplashPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("HomePage");
    }, 1500);
  }
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is a Splash Page</Text>
      </View>
    );
  }
}

export default SplashPage;
