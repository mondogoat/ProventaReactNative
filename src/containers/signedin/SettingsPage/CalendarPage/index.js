import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class CalendarPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Calendar Page</Text>
      </View>
    );
  }
}

export default CalendarPage;
