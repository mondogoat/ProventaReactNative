import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import ComponentStyle from "./styles";

const MenuButton = ({ onPress, image }) => {
  return (
    <View style={ComponentStyle.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={ComponentStyle.imageStyle}
          source={image}
          onPress={onPress}
        />
      </TouchableOpacity>
    </View>
  );
};

export { MenuButton };
