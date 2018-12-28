import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import { Header, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";

class Notificationpage extends Component {
  state = {
    notifItems: [
      {
        id: 0,
        label: "Push Notifications",
        toggleStatus: false
      },
      {
        id: 1,
        label: "SMS Notifications",
        toggleStatus: false
      },
      {
        id: 2,
        label: "Email Notifications",
        toggleStatus: false
      }
    ]
  };

  toggle(i) {
    const options = [...this.state.notifItems];
    options[i].toggleStatus = !options[i].toggleStatus;

    this.setState({ options });

    if (
      options[i].label === "Push Notifications" &&
      options[i].toggleStatus === true
    ) {
      alert("Push Notifications Enabled");
    } else if (
      options[i].label === "SMS Notifications" &&
      options[i].toggleStatus === true
    ) {
      alert("SMS Notifications Enabled");
    } else if (
      options[i].label === "Email Notifications" &&
      options[i].toggleStatus === true
    ) {
      alert("Email Notifications Enabled");
    }
  }

  renderNotifItems(options) {
    const notifItem = options.map(({ id, label }) => {
      return (
        <View key={id}>
          <ListItem>
            <View style={PageStyle.menuList}>
              <View style={{ width: "82%" }}>
                <Text style={PageStyle.menuTitle}>{label}</Text>
              </View>
              <View style={{ width: "18%" }}>
                <Switch
                  value={this.state.notifItems[id].toggleStatus}
                  onValueChange={this.toggle.bind(this, id)}
                />
              </View>
            </View>
            <View style={PageStyle.menuBorder} />
          </ListItem>
        </View>
      );
    });
    return notifItem;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="NOTIFICATIONS"
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Card>{this.renderNotifItems(this.state.notifItems)}</Card>
      </View>
    );
  }
}

export default Notificationpage;
