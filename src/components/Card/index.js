import React from "react";
import { View, Text } from "react-native";
import ComponentStyle from "./styles";

const Card = props => {
  return <View style={ComponentStyle.container}>{props.children}</View>;
};

export { Card };
