import React, { Component } from "react";
import { connect } from "react-redux";
import { DrawerActions } from "react-navigation";
import { Text, View, ScrollView, Image, ActivityIndicator } from "react-native";
import PageStyle from "./styles";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import { fetchStaticMeetings } from "../../../actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchStaticMeetings("anonymous", null);
  }

  renderContent() {
    const { hasLoadedMeetings } = this.props;
    console.log(hasLoadedMeetings);
    if (hasLoadedMeetings) {
      return <View>{this.renderCategories()}</View>;
    }
    return <ActivityIndicator loaded={hasLoadedMeetings} size="large" />;
  }

  renderCategories() {
    const { meetings } = this.props;
    const meeting = meetings.map(({ id, region, events }) => {
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

    return meeting;
  }

  renderEvents(events) {
    const { navigation } = this.props;
    const event = events.map(({ id, title, description, event }) => {
      return (
        <View key={id}>
          <ListItem onPress={() => navigation.navigate("MeetingPage")}>
            <Image style={PageStyle.eventTitle} source={{ uri: title }} />
            <Text style={PageStyle.eventDescription}> {description}</Text>
            <Text style={PageStyle.eventDate}> {event}</Text>
            <View style={PageStyle.eventBorder} />
          </ListItem>
        </View>
      );
    });

    return event;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="STRATEGY MEETINGS"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <ScrollView>
          <ListItem onPress={() => navigation.navigate("MeetingPage")}>
            <Card>
              <Image
                style={PageStyle.image}
                source={require("../../../assets/event_1.png")}
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
          </ListItem>
          {this.renderContent()}
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

const mapStatetoProps = ({ meeting }) => {
  const { meetings, hasLoadedMeetings } = meeting;

  return {
    meetings,
    hasLoadedMeetings
  };
};

export default connect(
  mapStatetoProps,
  { fetchStaticMeetings }
)(HomePage);
