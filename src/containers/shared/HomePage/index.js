import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import * as actions from "../../../actions";

class HomePage extends Component {
  state = {
    currentVenues: []
  };

  componentWillMount() {
    this.props.fetchMainMeeting(35, "loggedout");
    this.props.fetchMainVenue(35, "loggedout");
    this.props.fetchMeetings("loggedout");
    this.props.fetchFacilitators(35, "loggedout");
  }

  // renderCategories() {
  //   const { meetings } = this.props;
  //   console.log(meetings);
  //   return (< Text > All Meetings </Text >)
  //   const category = meetings.map(({ id, attributes  }) => {
  //     return (
  //           {this.renderEvents(events)}
  //         </View>

  //     );
  //   });

  //   // return category;
  // }

  renderMeetings() {
    const { navigation, meetings } = this.props;
    const meeting = meetings.map(({ id, attributes }) => {
      return (
        <View key={id} style={PageStyle.eventList}>
          <ListItem
            onPress={() =>
              navigation.navigate("MeetingPage", { meetingId: id, status: "loggedout" })
            }
          >
            <Card style={{ width: "90%" }}>
              <Image
                style={PageStyle.eventTitle}
                source={{
                  uri:
                    "https://i.ibb.co/8Nwk5LS/Screen-Shot-2019-02-21-at-11-08-34-AM.png"
                }}
              />
              <Text style={PageStyle.eventDescription}>
                {" "}
                {attributes.title}
              </Text>
              <Text style={PageStyle.eventDate}> {attributes.date}</Text>
              <View style={PageStyle.eventBorder} />
            </Card>
          </ListItem>
        </View>
      );
    });
    return meeting;
  }

  renderVenue() {
    const { venues, hasLoadedVenues } = this.props;
    if (hasLoadedVenues) {
      const venue = venues.map(({ id, title }) => {
        return <Text key={id}>{title} </Text>;
      });

      return venue;
    }
  }

  render() {
    const {
      navigation,
      mainmeeting,
      hasLoadedMainMeeting,
      hasLoadedMeetings,
      hasLoadedVenues,
      hasLoadedExpectations
    } = this.props;

    return (
      <View style={PageStyle.container}>
        <Header
          label="STRATEGY MEETINGS"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        {hasLoadedMainMeeting && hasLoadedMeetings ? (
          <ScrollView>
            <ListItem onPress={() => navigation.navigate("MeetingPage", { meetingId: 35, status: "loggedout" })}>
              <Card>
                <Image
                  style={PageStyle.image}
                  source={{
                    uri: "https://i.ibb.co/H7mTZhc/proventa-app-launch.png"
                  }}
                />
                <View style={PageStyle.info}>
                  <Text style={PageStyle.description}>{mainmeeting.title}</Text>
                  <Text style={PageStyle.date}>
                    {mainmeeting.date} | {this.renderVenue()}
                  </Text>
                </View>
              </Card>
            </ListItem>
            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: "500" }}>
              {" "}
              All Meetings{" "}
            </Text>
            <View style={PageStyle.meetingsContainer}>
              {this.renderMeetings()}
            </View>
          </ScrollView>
        ) : (
            <View style={PageStyle.loading}>
              <ActivityIndicator loaded={hasLoadedMainMeeting} size="large" />
            </View>
          )}
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

const mapStatetoProps = ({ meeting }) => {
  const {
    mainmeeting,
    hasLoadedMainMeeting,
    venues,
    hasLoadedVenues,
    meetings,
    hasLoadedMeetings,
    hasLoadedExpectations
  } = meeting;
  return {
    mainmeeting,
    hasLoadedMainMeeting,
    venues,
    hasLoadedVenues,
    meetings,
    hasLoadedMeetings,
    hasLoadedExpectations
  };
};

export default connect(
  mapStatetoProps,
  actions
)(HomePage);
