import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class Notificationpage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Notification Page</Text>
      </View>
    );
  }
}

export default Notificationpage;
