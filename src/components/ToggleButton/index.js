import React, { Component } from "react";
//import ComponentStyle from "./styles";
import ToggleSwitch from "toggle-switch-react-native";

class ToggleButton extends Component {
  render() {
    return (
      <ToggleSwitch
        isOn={false}
        onColor="green"
        offColor="red"
        label="Sample"
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="large"
        onToggle={isOn => console.log("changed to : ", isOn)}
      />
    );
  }
}

export { ToggleButton };
