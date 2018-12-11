import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import ComponentStyle from "./styles";

class InputBox extends Component {
  render() {
    const { label, placeholder, onChangeText } = this.props;
    return (
      <View style={ComponentStyle.searchSection}>
        <Text style={ComponentStyle.label}> {label}</Text>
        <TextInput
          style={ComponentStyle.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

export { InputBox };
