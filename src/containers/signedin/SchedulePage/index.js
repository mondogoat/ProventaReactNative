import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Header, TabbedMenu, ListItem, Accordion } from "../../../components";
import PageStyle from "./styles";
import { connect } from "react-redux";
import { DrawerActions } from "react-navigation";
import * as actions from "../../../actions";

class SchedulePage extends Component {
  state = {
    morningSessions: [
    ],
    afternoonSessions: [
    ],
    selectedIndex: 1,
    selectedIndex: 1
  };

  componentDidMount() {
    this.props.fetchDiscussions(35);
    this.props.fetchTalks(10);
  }

  formatHours(date) {
    var date = new Date(date);
    return (parseInt(date.getHours()) - 8);
  }


  formatMinutes(date) {
    var date = new Date(date);
    if (parseInt(date.getMinutes()) === 0) {
      return '00'
    }
    return (parseInt(date.getMinutes()));
  }

  filterSessions() {
    const { discussions } = this.props;
    const sessions = discussions;
    for (i = 0; i <= sessions.length - 1; i++) {
      console.log(i <= sessions.length - 1);
      const endTime = this.formatHours(sessions[i].endTime);
      const data = [{
        id: sessions[i].id,
        startTime: sessions[i].startTime,
        endTime: sessions[i].endTime,
        title: sessions[i].title
      }];
      if (parseInt(endTime) <= 12) {
        // this.setState({
        //   morningSessions: [this.state.morningSessions.concat(data)
        // });
      }

      console.log(sessions);

      console.log("filter")
      console.log(this.state.morningSessions);
    }
  }

  getIndex(id) {
    const { discussions } = this.props;
    return discussions.findIndex(discussions => discussions.id === id);
  }


  getIndexTalks(talks, id) {

    return talks.findIndex(talks => talks.id === id);
  }



  renderSessions() {
    const { navigation, discussions, talks } = this.props;

    // this.filterSessions();
    // const data = type === 'am' ? this.state.morningSessions : this.state.afternoonSessions;
    const session = discussions.map(({ id, attributes }) => {
      if (attributes.talksWithFacilitator.data.length == 0) {
        return (
          <View key={id} style={PageStyle.ListContainer}>
            <ListItem
              onPress={() => {
                this.setState(
                  {
                    selectedIndex: this.getIndex(id)
                  },
                  () => {
                    // this.props.navigation.navigate("ScheduleDetailsPage", {
                    //   location: attributes.tal,
                    //   image: floorplan.image,
                    //   label: "SCHEDULE DETAILS"
                    //   imageUrl: floorplan.image
                    // });
                  }
                );
              }}
            >
              <View
                style={[
                  id == discussions.length - 1
                    ? [PageStyle.scheduleList, { borderBottomWidth: 0 }]
                    : PageStyle.scheduleList
                ]}
              >
                <View>
                  <Text style={PageStyle.text}>
                    {this.formatHours(attributes.startTime)}:{this.formatMinutes(attributes.startTime)}-{" "}
                    {this.formatHours(attributes.endTime)}:{this.formatMinutes(attributes.endTime)}
                  </Text>
                  <Text style={PageStyle.title}>{attributes.title}</Text>
                </View>
              </View>
            </ListItem>
          </View>
        );
      } else {
        return (
          <View key={id} style={PageStyle.ListContainer}>
            <Accordion sessionTitle={attributes.title} startTime={attributes.startTime} endTime={attributes.endTime}>
              {this.renderDropdownList(attributes.talksWithFacilitator.data)}
            </Accordion>
          </View>
        );
      }
    });
    return session;
  }

  renderDropdownList(talks) {
    // const { talks } = this.props;
    console.log(talks);
    const event = talks.map(({ id, attributes }) => {
      return (
        <View key={id} style={PageStyle.dropdownList}>
          <ListItem
            onPress={() => {
              this.setState(
                {
                  selectedInnerIndex: this.getIndexTalks(talks, id)
                },
                () => {
                  console.log(this.state.selectedInnerIndex);
                  // this.props.navigation.navigate("ScheduleDetailsPage", {
                  //   label: "Details",
                  //   eventTitle: attributes[this.getIndex()].topic,
                  //   name: attributes[this.getIndex()].facilitator.first_name + attributes[this.getIndex()].facilitator.last_name,
                  //   nameTitle: attributes[this.getIndex()].facilitator.company + attributes[this.getIndex()].facilitator.position,
                  //   location: events[id].floorplan.location,
                  //   image: events[id].floorplan.image,
                  //   topic: events[id].topic,
                  //   description: events[id].description,
                  // });
                }
              );
            }}
          >
            <View>
              <Text style={PageStyle.title}>{attributes.title}</Text>
            </View>
          </ListItem>
        </View >
      );
    });
    return event;
  }
  renderFloorPlan(map) {
    return <Image source={map.image
    } style={PageStyle.mapImage} />;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="SCHEDULE"
          status="loggedin"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
          settings={() =>
            navigation.navigate("SettingsPage", {
              content: "settings",
              previousRoute: "SchedulePage"
            })
          }
        />
        <ScrollView>
          {/* <Text style={PageStyle.header}> MORNING SESSION </Text> */}
          <Text style={PageStyle.header}>  SESSIONS </Text>
          {this.renderSessions()}
          {/* <Text style={PageStyle.header}> AFTERNOON SESSION </Text> */}
          {/* {this.renderSessions('pm')} */}
        </ScrollView>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

const mapStatetoProps = ({ meeting }) => {
  const { discussions, talks } = meeting;
  return {
    discussions,
    talks
  };
};

export default connect(mapStatetoProps, actions)(SchedulePage);



