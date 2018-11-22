import React from "react";
import { View, Text } from "react-native";
import ComponentStyle from "./styles";

const SideMenu = ({ navigation }) => {
  return (
    <View style={ComponentStyle.container}>
      <Text> This is a Side Menu </Text>
    </View>
  );
};

export { SideMenu };
