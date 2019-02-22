import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";
import { connect } from 'react-redux';
import * as actions from "../../../../actions";

class InformationDetailsPage extends Component {
  state = {
    facilitators: [
      {
        id: 0,
        icon: require("../../../../assets/facilitator_1.png"),
        name: "David Crain",
        title: "Alibaba CEO"
      },
      {
        id: 1,
        icon: require("../../../../assets/facilitator_2.png"),
        name: "Yvone Thompson",
        title: "Sputnik Inc. CEO"
      },
      {
        id: 2,
        icon: require("../../../../assets/faclitator2.png"),
        name: "Phet Putrie",
        title: "Founder of Stark Industries"
      },
      {
        id: 3,
        icon: require("../../../../assets/facilitator_4.png"),
        name: "Arnold Zachary",
        title: "CEO Wacom Industries"
      }
    ],
    sponsors: [
      {
        id: 0,
        icon: require("../../../../assets/amazon.png"),
        name: "Amazon"
      },
      {
        id: 1,
        icon: require("../../../../assets/hooli.png"),
        name: "Hooli"
      },
      {
        id: 2,
        icon: require("../../../../assets/aviato.png"),
        name: "Aviato"
      },
      {
        id: 3,
        icon: require("../../../../assets/piedpiper.png"),
        name: "Pied Piper"
      },
      {
        id: 4,
        icon: require("../../../../assets/dundlermifflin.png"),
        name: "Dundler Mifflin Paper Company Inc."
      },
      {
        id: 5,
        icon: require("../../../../assets/arenanet.png"),
        name: "ArenaNet"
      }
    ],
    floorplan: {
      image: require("../../../../assets/floor_map.png")
    },
    selectedIndex: null
  };

  componentDidMount() {
    this.props.fetchParticipants(35);
    this.props.fetchFacilitators(35);
    this.props.fetchSponsors(35);
    this.props.fetchFloorPlans(35);
    this.props.fetchExpectations(35);
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
    const { navigation, participants } = this.props;
    console.log(participants);
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

const mapStatetoProps = ({ meeting }) => {
  const { mainmeeting, venues, expectations, facilitators, participants, sponsors, floorPlans } = meeting;
  return {
    mainmeeting,
    venues,
    expectations,
    facilitators,
    participants,
    sponsors,
    floorPlans
  };
};

export default connect(mapStatetoProps, actions)(InformationDetailsPage);


