import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class CheckInPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Check In Page</Text>
      </View>
    );
  }
}

export default CheckInPage;
