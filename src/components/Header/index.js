import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ComponentStyle from "./styles";

const Header = ({ onPress, label, status }) => {
  return (
    <View style={ComponentStyle.container}>
      {/* Menu Button */}
      <TouchableOpacity onPress={onPress} style={ComponentStyle.buttonStyle}>
        <Image
          style={ComponentStyle.buttonImage}
          source={require("../../assets/menu_button.png")}
        />
      </TouchableOpacity>
      {/*Header Label  */}
      <Text style={ComponentStyle.title}>{label}</Text>
      {/* Menu Button */}
      <TouchableOpacity
        onPress={onPress}
        style={ComponentStyle.buttonStyle}
        disabled={status === "loggedin" ? false : true}
      >
        <Image
          style={[
            ComponentStyle.buttonImage,
            status === "loggedin" ? { opacity: 1 } : { opacity: 0 }
          ]}
          source={require("../../assets/settings_button.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
