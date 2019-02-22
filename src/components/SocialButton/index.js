import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ComponentStyle from "./styles";

class SocialButton extends Component {
  render() {
    const { icon, type, label, onPress } = this.props;
    return (
      <View style={ComponentStyle.container}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={[
              type === "google"
                ? ComponentStyle.google
                : ComponentStyle.linkedIn,
              ComponentStyle.socialButton
            ]}
          >
            <View style={{ flex: 1 }}>
              <Image style={ComponentStyle.socialButtonIcon} source={icon} />
            </View>
            <View style={{ flex: 3.5 }}>
              <Text
                style={[
                  ComponentStyle.socialButtonLabel,
                  type === "google"
                    ? ComponentStyle.googleText
                    : ComponentStyle.linkedInText
                ]}
              >
                {label}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export { SocialButton };
