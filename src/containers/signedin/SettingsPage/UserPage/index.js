import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class UserPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is UserPage</Text>
      </View>
    );
  }
}

export default UserPage;
