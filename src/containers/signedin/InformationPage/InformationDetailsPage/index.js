import React, { Component } from "react";
import { View, Text, Image } from "react-native";
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
    ]
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

  renderContent() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");

    console.log(content);
    if (content === "Facilitators") {
      return <Card>{this.renderFacilitators(this.state.facilitators)}</Card>;
    } else if (content === "Participants") {
      return <Card>{this.renderParticipants(this.state.facilitators)}</Card>;
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="FACILITATORS"
          status="details"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        {this.renderContent()}
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default InformationDetailsPage;
