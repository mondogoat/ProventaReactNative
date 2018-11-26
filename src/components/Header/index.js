import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ComponentStyle from "./styles";

const Header = ({ onPress, label }) => {
  return (
    <View style={ComponentStyle.container}>
      {/* Menu Button */}
      <TouchableOpacity onPress={onPress} style={ComponentStyle.buttonStyle}>
        <Image source={require("../../assets/menu_button.png")} />
      </TouchableOpacity>
      {/*Header Label  */}
      <Text>{label}</Text>
      {/* Menu Button */}
      <TouchableOpacity
        onPress={onPress}
        style={ComponentStyle.buttonStyle}
        disabled={true}
      >
        <Image
          style={{ opacity: 0 }}
          source={require("../../assets/menu_button.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
