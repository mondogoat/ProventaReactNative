import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { connect } from "react-redux";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import * as actions from "../../../actions";


class HomePage extends Component {
  state = {
    // meetings: [
    //   {
    //     id: 1,
    //     region: "APAC",
    //     events: [
    //       {
    //         id: "apac1",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "Singapore 2018"
    //       },
    //       {
    //         id: "apac2",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "Malaysia 2018"
    //       },
    //       {
    //         id: "apac3",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "Hongkong 2018"
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     region: "EUROPE",
    //     events: [
    //       {
    //         id: "europe1",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "France 2018"
    //       },
    //       {
    //         id: "europe2",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "Germany 2018"
    //       },
    //       {
    //         id: "europe",
    //         title: "https://i.ibb.co/QYRP3H7/event-description-1.png",
    //         description: "HR Leaders Strategy Meeting APAC",
    //         event: "Italy 2018"
    //       }
    //     ]
    //   }
    // ],
    currentVenues: []
  };

  componentDidMount() {

    this.props.fetchMainMeeting(35);
    this.props.fetchMainVenue(35);
    this.props.fetchMeetings();
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

  renderEvents() {
    const { navigation, meetings } = this.props;
    const meeting = meetings.map(({ id, attributes }) => {
      return (
        <View key={id} style={PageStyle.eventList}>
          <ListItem onPress={() => navigation.navigate("MeetingPage", { meetingId: id })}>
            <Card style={{ width: "90%" }}>
              <Image style={PageStyle.eventTitle} source={{ uri: "https://i.ibb.co/8Nwk5LS/Screen-Shot-2019-02-21-at-11-08-34-AM.png" }} />
              <Text style={PageStyle.eventDescription}> {attributes.title}</Text>
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
    const { venues } = this.props;
    const venue = venues.map(({ id, title }) => {
      return (
        <Text key={id}>{title} </Text>
      );
    });

    return venue;
  }

  render() {
    const { navigation, mainmeeting } = this.props;

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
                source={{ uri: "https://i.ibb.co/H7mTZhc/proventa-app-launch.png" }}
              />
              <View style={PageStyle.info}>
                <Text style={PageStyle.description}>
                  {mainmeeting.title}
                </Text>
                <Text style={PageStyle.date}>
                  {mainmeeting.date} | {this.renderVenue()}
                </Text>
              </View>
            </Card>
          </ListItem>
          <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '500' }}> All Meetings </Text>
          {this.renderEvents()}
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}


const mapStatetoProps = ({ meeting }) => {
  const { mainmeeting, venues, meetings } = meeting;
  return {
    mainmeeting,
    venues,
    meetings
  };
};


export default connect(mapStatetoProps, actions)(HomePage);
