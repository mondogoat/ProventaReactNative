import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Header, TabbedMenu, Card } from "../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class HomePage extends Component {
  state = {
    meetings: [
      {
        id: 1,
        region: "APAC",
        events: [
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
      },
      {
        id: 2,
        region: "EUROPE",
        events: [
          {
            id: "europe1",
            title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
            description: "HR Leaders Strategy Meeting APAC",
            event: "France 2018"
          },
          {
            id: "europe2",
            title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
            description: "HR Leaders Strategy Meeting APAC",
            event: "Germany 2018"
          },
          {
            id: "europe",
            title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
            description: "HR Leaders Strategy Meeting APAC",
            event: "Italy 2018"
          }
        ]
      }
    ]
  };

  renderCategories() {
    const category = this.state.meetings.map(({ id, region, events }) => {
      return (
        <View key={id} style={PageStyle.eventList}>
          <Text style={PageStyle.region}> {region}</Text>
          <View style={PageStyle.eventContainer}>
            {this.renderEvents(events)}
          </View>
          <View style={PageStyle.expandButton}>
            <Text> More Meetings </Text>
          </View>
        </View>
      );
    });

    return category;
  }

  renderEvents(events) {
    const meeting = events.map(({ id, title, description, event }) => {
      return (
        <View key={id}>
          <Image style={PageStyle.eventTitle} source={{ uri: title }} />
          <Text style={PageStyle.eventDescription}> {description}</Text>
          <Text style={PageStyle.eventDate}> {event}</Text>
          <View style={PageStyle.eventBorder} />
        </View>
      );
    });

    return meeting;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="STRATEGY MEETINGS"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>
          <Card>
            <Image
              style={PageStyle.image}
              source={require("../../assets/event_1.png")}
            />
            <View style={PageStyle.info}>
              <Text style={PageStyle.description}>
                Digital Transformation Strategy Meeting APAC - Manila 2018
              </Text>
              <Text style={PageStyle.date}>
                22nd November 2018 | Marriot Grand Ballroom - Manila
              </Text>
            </View>
          </Card>
          {this.renderCategories()}
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default HomePage;
