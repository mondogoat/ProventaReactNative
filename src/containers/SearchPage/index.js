import React, { Component } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
import PageStyle from "./styles";

class SearchPage extends Component {
  render() {
    return (
      <View style={PageStyle.container}>
        <Text> This is a Search Page</Text>
      </View>
    );
  }
}

export default SearchPage;
