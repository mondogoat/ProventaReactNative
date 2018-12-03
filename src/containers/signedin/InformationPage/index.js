import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class InformationPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Information Page</Text>
      </View>
    );
  }
}

export default InformationPage;
