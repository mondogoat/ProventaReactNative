import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class InboxPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Inbox Page</Text>
      </View>
    );
  }
}

export default InboxPage;
