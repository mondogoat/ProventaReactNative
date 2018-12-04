import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class InboxDetailsPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Inbox Details Page</Text>
      </View>
    );
  }
}

export default InboxDetailsPage;
