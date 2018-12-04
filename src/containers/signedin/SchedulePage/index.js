import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class SchedulePage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is SchedulePage</Text>
      </View>
    );
  }
}

export default SchedulePage;
