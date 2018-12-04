import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class SettingsPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Settings Page</Text>
      </View>
    );
  }
}

export default SettingsPage;
