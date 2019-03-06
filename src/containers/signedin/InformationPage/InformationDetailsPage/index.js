import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Linking, ActivityIndicator, AsyncStorage } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";
import { connect } from 'react-redux';
import * as actions from "../../../../actions";

class InformationDetailsPage extends Component {

  componentDidMount() {
    const { navigation, status, token } = this.props;
    // this.props.fetchMainMeeting(35, status, token);
    this.props.fetchFacilitators(35, status, token);
    this.props.fetchParticipants(35, status, token);
    this.props.fetchSponsors(35, status, token);
    this.props.fetchFloorPlans(35, status, token);
    // this.props.fetchMainVenue(35, status);
    // this.props.fetchExpectations(35, status);
    // // this.props.fetchFacilitators(35, status);
    // this.props.fetchParticipants(35, status);
    // this.props.fetchSponsors(35, status);

  }

  getIndex(id) {
    const { facilitators } = this.props;
    return facilitators.findIndex(facilitators => facilitators.id === id);
  }

  renderFacilitators() {
    const { navigation, facilitators } = this.props;
    const facilitator = facilitators.map(({ id, first_name, last_name, company, position }) => {
      return (
        <View key={id} style={PageStyle.listContainer}>
          <ListItem
            onPress={() => {
              ("schedl");
              this.setState(
                {
                  selectedIndex: this.getIndex(id)
                },
                () => {
                  navigation.navigate("FacilitatorDetailsPage", {
                    facilitator: facilitators[this.getIndex(id)]
                  });
                });
            }}
          >
            <View style={PageStyle.list}>
              <View style={{ width: "25%" }}>
                <Image
                  style={[PageStyle.listIcon, PageStyle.profileIcon]}
                  source={{ uri: "https://cdn5.vectorstock.com/i/thumb-large/13/04/male-profile-picture-vector-2041304.jpg" }}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text style={PageStyle.listTitle}>{first_name} {last_name}</Text>
                <Text style={PageStyle.listDescription}> {company} {position} </Text>
              </View>
            </View>
            <View style={PageStyle.listBorder} />
          </ListItem>
        </View>
      );
    });
    return facilitator;
  }

  renderParticipants() {
    const { participants } = this.props;
    console.log(participants);
    // const participants = navigation.getParam("participants");
    const participant = participants.map(({ id, first_name, last_name, position, company, linkedin }) => {
      return (
        <View key={id} style={PageStyle.listContainer}>
          <ListItem onPress={() => ("pressed")}>
            <View style={PageStyle.list}>
              <View style={{ width: "25%" }}>
                <Image
                  style={[PageStyle.listIcon, PageStyle.profileIcon]}
                  source={{ uri: "https://cdn5.vectorstock.com/i/thumb-large/13/04/male-profile-picture-vector-2041304.jpg" }}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text style={PageStyle.listTitle}>{first_name} {last_name}</Text>
                <Text style={PageStyle.listDescription}>{company} {position}</Text>
              </View>
              <View style={{ width: "25%" }}>
                <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
                  <Image
                    style={[PageStyle.linkedInButton]}
                    source={require("../../../../assets/linkedin.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={PageStyle.listBorder} />
          </ListItem>
        </View>
      );
    });
    return participant;
  }

  renderSponsors() {
    const { sponsors } = this.props;
    const sponsor = sponsors.map(({ id, title, image, website }) => {
      return (
        <View key={id} style={{ width: "45%", alignItems: "flex-start" }}>
          <TouchableOpacity onPress={() => { Linking.openURL(website) }}>
            <Image style={PageStyle.boxImage} source={{ uri: image.url }} />
            <Text style={PageStyle.title}> {title} </Text>
          </TouchableOpacity>
        </View>
      );
    });

    return sponsor;
  }

  renderFloorPlan() {
    const { floorPlans } = this.props;
    console.log(floorPlans);
    const floorPlan = floorPlans.map(({ id, image }) => {
      return (
        <View key={id} style={{ width: "45%", alignItems: "center" }}>
          <Image source={{ uri: image.url }} style={PageStyle.mapImage} />
        </View>
      );
    });

    return floorPlan;
  }

  renderContent() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    if (content === "FACILITATORS") {
      return <Card>{this.renderFacilitators()}</Card>;
    } else if (content === "PARTICIPANTS") {
      return <Card>{this.renderParticipants()}</Card>;
    } else if (content === "SPONSORS") {
      return (
        <ScrollView>
          <Card>
            <View style={PageStyle.box}>
              {this.renderSponsors()}
            </View>
          </Card>
        </ScrollView>
      );
    } else if (content === "FLOOR MAP") {
      return <Card>{this.renderFloorPlan()}</Card>;
    }
  }

  hasFetchedAll() {
    const { hasLoadedMainMeeting, hasLoadedVenues, hasLoadedExpectations, hasLoadedFacilitators,
      hasLoadedParticipants, hasLoadedSponsors, hasLoadedFloorPlans } = this.props;

    return (
      hasLoadedMainMeeting && hasLoadedVenues && hasLoadedExpectations && hasLoadedFacilitators &&
      hasLoadedParticipants && hasLoadedSponsors && hasLoadedFloorPlans
    )
  }

  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    return (
      <View style={PageStyle.container}>
        <Header
          label={content}
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {this.renderContent()}
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

const mapStatetoProps = ({ meeting, auth }) => {
  const { mainmeeting, venues, expectations, facilitators, participants, sponsors, floorPlans,
    hasLoadedMainMeeting, hasLoadedVenues, hasLoadedExpectations, hasLoadedFacilitators,
    hasLoadedParticipants, hasLoadedSponsors, hasLoadedFloorPlans
  } = meeting;

  const { status, token } = auth;
  return {
    mainmeeting,
    venues,
    expectations,
    facilitators,
    participants,
    sponsors,
    floorPlans,
    hasLoadedMainMeeting, hasLoadedVenues, hasLoadedExpectations, hasLoadedFacilitators,
    hasLoadedParticipants, hasLoadedSponsors, hasLoadedFloorPlans,
    status,
    token
  };
};

export default connect(mapStatetoProps, actions)(InformationDetailsPage);


