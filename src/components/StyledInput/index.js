import React, { Component } from "react";
import { View, Image, TextInput } from "react-native";
import ComponentStyle from "./styles";

class StyledInput extends Component {
  renderRightIcon(type, onChangeText, icon, visibilityIcon) {
    if (type === "password") {
      return (
        <View style={ComponentStyle.rightIcon}>
          <Image style={ComponentStyle.icon} source={visibilityIcon} />
        </View>
      );
    } else {
      return (
        <View style={ComponentStyle.rightIcon}>
          <Image style={[ComponentStyle.icon, { opacity: 0 }]} source={icon} />
        </View>
      );
    }
  }
  render() {
    const {
      type,
      placeholder,
      onChangeText,
      icon,
      visibilityIcon
    } = this.props;
    return (
      <View style={ComponentStyle.searchSection}>
        <View style={ComponentStyle.leftIcon}>
          <Image style={ComponentStyle.icon} source={icon} />
        </View>
        <View style={ComponentStyle.centerBorder}>
          <TextInput
            style={ComponentStyle.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            autoCapitalize={false}
          />
        </View>
        {this.renderRightIcon(
          type,
          placeholder,
          onChangeText,
          visibilityIcon,
          icon
        )}
      </View>
    );
  }
}

export { StyledInput };
