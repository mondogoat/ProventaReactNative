import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ComponentStyle from "./styles";

const ListItem = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={ComponentStyle.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export { ListItem };
