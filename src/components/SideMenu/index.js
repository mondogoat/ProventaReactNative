import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ComponentStyle from "./styles";
import { DrawerActions } from "react-navigation";

class SideMenu extends Component {
  state = {
    histories: [
      {
        id: "apac1",
        title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
        description: "HR Leaders Strategy Meeting APAC",
        event: "Singapore 2018"
      },
      {
        id: "apac2",
        title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
        description: "HR Leaders Strategy Meeting APAC",
        event: "Malaysia 2018"
      },
      {
        id: "apac3",
        title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
        description: "HR Leaders Strategy Meeting APAC",
        event: "Hongkong 2018"
      }
    ]
  };

  renderHistory(histories) {
    const history = histories.map(({ id, title, description, event }) => {
      return (
        <View key={id}>
          <Image style={ComponentStyle.eventTitle} source={{ uri: title }} />
          <Text style={ComponentStyle.eventDescription}> {description}</Text>
          <Text style={ComponentStyle.eventDate}> {event}</Text>
          <View style={ComponentStyle.eventBorder} />
        </View>
      );
    });

    return history;
  }

  renderEmpty() {
    const { navigation } = this.props;
    return (
      <View style={{ alignItems: "center" }}>
        <Image
          style={ComponentStyle.placeholder}
          source={require("../../assets/calendar_placeholder.png")}
        />
        <Text style={ComponentStyle.instructions}>
          When you view a strategy meeting, it will be listed here
        </Text>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Text style={ComponentStyle.link}> START BROWSING </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={ComponentStyle.container}>
        <Text style={ComponentStyle.title}> MEETINGS </Text>
        {/* {this.renderHistory(this.state.histories)} */}
        {this.renderEmpty()}
      </View>
    );
  }
}

export { SideMenu };
