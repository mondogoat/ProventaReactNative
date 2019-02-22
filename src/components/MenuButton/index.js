import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import ComponentStyle from "./styles";

const MenuButton = ({ onPress, image, status }) => {
  return (
    <View
      style={
        status === "SI" ? ComponentStyle.containerSI : ComponentStyle.containerA
      }
    >
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
