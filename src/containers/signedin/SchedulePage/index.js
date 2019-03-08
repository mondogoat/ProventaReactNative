import React, { Component } from "react";
import { View, Text, ScrollView, AsyncStorage } from "react-native";
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
    selectedInnerIndex: 1
  };

  async componentDidMount() {
    try {
      console.log('sadasasdasdsad');
      const { navigation } = this.props;
      const token = await AsyncStorage.getItem('token');
      console.log("Schedule", token);
      if (token !== null) {
        console.log("SchedulePage", token)
        this.props.updateStatus(token).then(() => {
          this.props.fetchDiscussions(35, "loggedin", token);
        })
      }
    } catch (error) {
      // Error retrieving data
    }
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
    }
  }

  getIndex(id) {
    const { discussions } = this.props;
    return discussions.findIndex(discussions => discussions.id === id);
  }


  getIndexTalks(talks, id) {
    return talks.findIndex(talks => talksWithFacilitator.id === id);
  }



  renderSessions() {
    const { navigation, discussions } = this.props;
    const session = discussions.map(({ id, attributes }) => {
      if (attributes.talksWithFacilitator.data.length == 0) {
        return (
          <View key={id} style={PageStyle.ListContainer}>
            <ListItem
              onPress={() => {
                this.props.navigation.navigate("ScheduleDetailsPage", {
                  location: attributes.floorPlans[0] ? attributes.floorPlans[0].location : null,
                  image: attributes.floorPlans[0] ? attributes.floorPlans[0].image.url : null,
                  label: attributes.title
                });
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
    const { navigation } = this.props;
    console.log(talks);
    const event = talks.map(({ id, attributes }) => {
      console.log(attributes);
      return (
        <View key={id} style={PageStyle.dropdownList}>
          <ListItem
            onPress={() => {
              navigation.navigate("ScheduleDetailsPage", {
                label: attributes.title,
                topic: attributes.topic,
                description: attributes.description,
                eventTitle: attributes.topic,
                name: attributes.facilitators[0].first_name + ' ' + attributes.facilitators[0].last_name,
                nameTitle: attributes.facilitators[0].company + ' ' + attributes.facilitators[0].position,
                linkedIn: attributes.facilitators[0].linkedin,
                location: attributes.floorPlans[0].location,
                image: attributes.floorPlans[0].image.url
              });
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
          status="details"
          onPress={() => {
            navigation.navigate("InformationPage", {
              status: "loggedin"
            })
          }}
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

const mapStatetoProps = ({ meeting, auth }) => {
  const { discussions, talks } = meeting;
  const { token, status } = auth;
  return {
    discussions,
    talks,
    token,
    status
  };
};

export default connect(mapStatetoProps, actions)(SchedulePage);



