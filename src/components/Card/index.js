import React from "react";
import { View, Text } from "react-native";
import ComponentStyle from "./styles";

const Card = () => {
  return (
    <View style={ComponentStyle.container}>
      <Text> This is a card</Text>
    </View>
  );
};

export { Card };
