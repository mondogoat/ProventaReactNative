import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  ListItem
} from "../../components";
import ComponentStyle from "./styles";

class Accordion extends Component {

  state = {
    expanded: false
  };

  renderDropdown() {
    if (this.state.expanded) {
      return this.props.children;
    }
  }

  renderAccordionButton() {
    if (this.state.expanded) {
      return <Image source={require("../../assets/accordion_up_button.png")} />
    }
    return <Image source={require("../../assets/accordion_down_button.png")} />
  }


  formatHours(date) {
    var date = new Date(date);
    return (parseInt(date.getHours()) - 8);
  }


  formatMinutes(date) {
    var date = new Date(date);
    if (parseInt(date.getMinutes()) === 0) {
      return '00'
    }
    return (parseInt(date.getMinutes()));
  }

  render() {
    const { sessionTitle, startTime, endTime } = this.props;

    return (
      <View>
        <ListItem onPress={() => { this.setState({ expanded: !this.state.expanded }) }}>
          <View style={ComponentStyle.scheduleList}>
            <View>
              <Text style={ComponentStyle.text}>
                {this.formatHours(startTime)}:{this.formatMinutes(startTime)}-{" "}
                {this.formatHours(endTime)}:{this.formatMinutes(endTime)}
              </Text>
              <Text style={ComponentStyle.title}>
                {sessionTitle}
              </Text>
            </View>
            <View>
              {this.renderAccordionButton()}
            </View>
          </View>
          {this.renderDropdown()}

        </ListItem>
      </View>
    );
  }
};

export { Accordion };
