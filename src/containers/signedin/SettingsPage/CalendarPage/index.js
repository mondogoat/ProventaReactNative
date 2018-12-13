import React, { Component } from "react";
import { View, Text } from "react-native";
import { ToggleButton, Header, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";

class CalendarPage extends Component {
  state = {
    calendarItems: [
      {
        id: 0,
        label: "Sync to Google Calendar"
      },
      {
        id: 1,
        label: "Sync to iCloud Calendar"
      }
    ]
  };

  renderCalendarItems(options) {
    const calendarItem = options.map(({ id, label }) => {
      return (
        <View id={id}>
          <ListItem>
            <View style={PageStyle.menuList}>
              <View style={{ width: "75%" }}>
                <Text style={PageStyle.menuTitle}>{label}</Text>
              </View>
              <View style={{ width: "25%" }}>
                <ToggleButton />
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
