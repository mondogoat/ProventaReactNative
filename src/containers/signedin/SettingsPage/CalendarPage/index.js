import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import { Header, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";

class CalendarPage extends Component {
  state = {
    calendarItems: [
      {
        id: 0,
        label: "Sync to Google Calendar",
        toggleStatus: false
      },
      {
        id: 1,
        label: "Sync to Phone Calendar",
        toggleStatus: false
      }
    ]
  };

  toggle(i) {
    const options = [...this.state.calendarItems];
    options[i].toggleStatus = !options[i].toggleStatus;

    this.setState({ options });

    if (
      options[i].label === "Sync to Google Calendar" &&
      options[i].toggleStatus === true
    ) {
      alert("Synced to Google Calendar");
    } else if (
      options[i].label === "Sync to Phone Calendar" &&
      options[i].toggleStatus === true
    ) {
      alert("Synced to Phone Calendar");
    }
  }

  renderCalendarItems(options) {
    const calendarItem = options.map(({ id, label }) => {
      return (
        <View key={id}>
          <ListItem>
            <View style={PageStyle.menuList}>
              <View style={{ width: "82%" }}>
                <Text style={PageStyle.menuTitle}>{label}</Text>
              </View>
              <View style={{ width: "18%" }}>
                <Switch
                  value={this.state.calendarItems[id].toggleStatus}
                  onValueChange={this.toggle.bind(this, id)}
                />
              </View>
            </View>
            <View style={PageStyle.menuBorder} />
          </ListItem>
        </View>
      );
    });
    return calendarItem;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="CALENDAR"
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Card>{this.renderCalendarItems(this.state.calendarItems)}</Card>
      </View>
    );
  }
}

export default CalendarPage;
