import React, { Component } from "react";
import { View, Text } from "react-native";
import { ToggleButton } from "../../../components";
import PageStyle from "./styles";

class SettingsPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Settings Page</Text>
        {/* <ToggleButton /> */}
      </View>
    );
  }
}

export default SettingsPage;
