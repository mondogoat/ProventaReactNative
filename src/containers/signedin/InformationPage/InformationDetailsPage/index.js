import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
class InformationDetailsPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is Information DetailsPage</Text>
      </View>
    );
  }
}

export default InformationDetailsPage;
