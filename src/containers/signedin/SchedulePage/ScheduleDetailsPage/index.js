import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class ScheduleDetailsPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Schedule Details Page</Text>
      </View>
    );
  }
}

export default ScheduleDetailsPage;
