import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ComponentStyle from "./styles";

const MainButton = ({ label, onPress }) => {
  return (
    <View style={ComponentStyle.container}>
      <TouchableOpacity style={ComponentStyle.button} onPress={onPress}>
        <Text style={ComponentStyle.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { MainButton };
