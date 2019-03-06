import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import { connect } from 'react-redux';
import * as actions from "../../../actions";

class InformationPage extends Component {
  state = {
    menu: [
      {
        id: 0,
        image: require("../../../assets/facilitators_icon.png"),
        label: "Facilitators",
        name: "FACILITATORS"
      },
      {
        id: 1,
        image: require("../../../assets/participators_icon.png"),
        label: "Participants",
        name: "PARTICIPANTS"
      },
      {
        id: 2,
        image: require("../../../assets/sponsors_icon.png"),
        label: "Sponsor",
        name: "SPONSORS"
      },
      {
        id: 3,
        image: require("../../../assets/map_icon.png"),
        label: "Floor Map",
        name: "FLOOR MAP"
      },
      {
        id: 4,
        image: require("../../../assets/feedback_icon.png"),
        label: "Feedback",
        name: "FEEDBACK"
      }
    ]
  };

  componentDidMount() {
    const { navigation, status, token } = this.props;
    //this.props.fetchParticipants(34, 'loggedin');
  }

  renderMenu(menu) {
    const { navigation } = this.props;
    const menuItem = menu.map(({ id, image, label, name }) => {
      return (
        <View key={id} style={PageStyle.menuContainer}>
          <ListItem
            onPress={() =>
              navigation.navigate("InformationDetailsPage", {
                content: name,
                status: "loggedin"
              })
            }
          >
            <View style={PageStyle.menuList}>
              <View style={{ width: "25%" }}>
                <Image style={PageStyle.menuIcon} source={image} />
              </View>
              <View style={{ width: "75%" }}>
                <Text style={PageStyle.menuTitle}>{label}</Text>
              </View>
            </View>
            <View style={PageStyle.menuBorder} />
          </ListItem>
        </View>
      );
    });

    return menuItem;
  }



  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="INFORMATION"
          status="loggedin"
          settings={() =>
            navigation.navigate("SettingsPage", {
              content: "settings",
              previousRoute: "InformationPage"
            })
          }
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Card>{this.renderMenu(this.state.menu)}</Card>
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

  const { status } = auth;
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
    auth
  };
};

export default connect(mapStatetoProps, actions)(InformationPage);
