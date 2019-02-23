import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import { Header, Card, ListItem, TabbedMenu } from "../../../../components";
import PageStyle from "./styles";
import { fetchNotificationSettings } from "../../../../actions";
import { connect } from "react-redux";

class Notificationpage extends Component {
  state = {
    notifItems: [
      {
        id: 0,
        label: "Push Notifications",
        toggleStatus: null
      },
      {
        id: 1,
        label: "SMS Notifications",
        toggleStatus: null
      },
      {
        id: 2,
        label: "Email Notifications",
        toggleStatus: null
      }
    ]
  };

  componentDidMount() {
    this.props.fetchNotificationSettings();
  }

  toggle(i) {
    const { notification } = this.props;
    const options = [...this.state.notifItems];

    if (i === 0) {
      options[i].toggleStatus = notification.notificationPush;
    } else if (i === 1) {
      options[i].toggleStatus = notification.notificationSms;
    } else if (i === 2) {
      options[i].toggleStatus = notification.notificationEmail;
    }
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
    const { notification } = this.props;
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
                  value={
                    id === 0
                      ? notification.notificationPush
                      : id === 1
                      ? notification.notificationSms
                      : notification.notificationEmail
                  }
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
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

mapStatetoProps = ({ settings }) => {
  const { notification } = settings;
  return { notification };
};

export default connect(
  mapStatetoProps,
  { fetchNotificationSettings }
)(Notificationpage);
