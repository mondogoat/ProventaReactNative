import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Header, TabbedMenu } from "../../components";
import PageStyle from "./styles";

class SearchPage extends Component {
  state = {
    searches: [
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

  renderSearches(searches) {
    const search = searches.map(({ id, title, description, event }) => {
      return (
        <View key={id} style={PageStyle.eventList}>
          <View style={PageStyle.eventContainer}>
            <Image style={PageStyle.eventTitle} source={{ uri: title }} />
            <Text style={PageStyle.eventDescription}> {description}</Text>
            <Text style={PageStyle.eventDate}> {event}</Text>
            <View style={PageStyle.eventBorder} />
          </View>
        </View>
      );
    });

    return search;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="SEARCH"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>{this.renderSearches(this.state.searches)}</ScrollView>

        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default SearchPage;
