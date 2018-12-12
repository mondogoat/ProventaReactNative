import React, { Component } from "react";
//import ComponentStyle from "./styles";
import ToggleSwitch from "toggle-switch-react-native";

class ToggleButton extends Component {
  render() {
    return (
      <ToggleSwitch
        isOn={false}
        onColor="green"
        offColor="gray"
        style={{ padding: 20 }}
        size="small"
        onToggle={isOn => console.log("changed to : ", isOn)}
      />
    );
  }
}

export { ToggleButton };
