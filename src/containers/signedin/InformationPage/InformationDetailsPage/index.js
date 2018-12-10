import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

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
    }
  };

  renderFacilitators(facilitators) {
    const { navigation } = this.props;
    const facilitator = facilitators.map(({ id, icon, title, name }) => {
      return (
        <View key={id} style={PageStyle.listContainer}>
          <ListItem onPress={() => console.log("pressed")}>
            <View style={PageStyle.list}>
              <View style={{ width: "25%" }}>
                <Image
                  style={[PageStyle.listIcon, PageStyle.profileIcon]}
                  source={icon}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text style={PageStyle.listTitle}>{name}</Text>
                <Text style={PageStyle.listDescription}>{title}</Text>
              </View>
            </View>
            <View style={PageStyle.listBorder} />
          </ListItem>
        </View>
      );
    });
    return facilitator;
  }

  renderParticipants(participants) {
    const { navigation } = this.props;
    const participant = participants.map(({ id, icon, title, name }) => {
      return (
        <View key={id} style={PageStyle.listContainer}>
          <ListItem onPress={() => console.log("pressed")}>
            <View style={PageStyle.list}>
              <View style={{ width: "25%" }}>
                <Image
                  style={[PageStyle.listIcon, PageStyle.profileIcon]}
                  source={icon}
                />
              </View>
              <View style={{ width: "50%" }}>
                <Text style={PageStyle.listTitle}>{name}</Text>
                <Text style={PageStyle.listDescription}>{title}</Text>
              </View>
              <View style={{ width: "25%" }}>
                <Image
                  style={[PageStyle.linkedInButton]}
                  source={require("../../../../assets/linkedin.png")}
                />
              </View>
            </View>
            <View style={PageStyle.listBorder} />
          </ListItem>
        </View>
      );
    });
    return participant;
  }

  renderSponsors(sponsors) {
    const sponsor = sponsors.map(({ id, icon, name }) => {
      return (
        <View key={id} style={{ width: "45%", alignItems: "center" }}>
          <Image style={PageStyle.boxImage} source={icon} />
          <Text style={PageStyle.title}> {name} </Text>
        </View>
      );
    });

    return sponsor;
  }

  renderFloorPlan(map) {
    return <Image source={map.image} style={PageStyle.mapImage} />;
  }
  renderContent() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    if (content === "FACILITATORS") {
      return <Card>{this.renderFacilitators(this.state.facilitators)}</Card>;
    } else if (content === "PARTICIPANTS") {
      return <Card>{this.renderParticipants(this.state.facilitators)}</Card>;
    } else if (content === "SPONSORS") {
      return (
        <ScrollView>
          <Card>
            <View style={PageStyle.box}>
              {this.renderSponsors(this.state.sponsors)}
            </View>
          </Card>
        </ScrollView>
      );
    } else if (content === "FLOOR MAP") {
      return <Card>{this.renderFloorPlan(this.state.floorplan)}</Card>;
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

export default InformationDetailsPage;
