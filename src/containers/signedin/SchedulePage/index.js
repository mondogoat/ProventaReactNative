import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Header, TabbedMenu, ListItem, Accordion } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
class SchedulePage extends Component {
  state = {
    morningSessions: [
      {
        id: 0,
        time: 
        {
          startingHour: "7",
          startingMinute: "00",
          meridian: "am",
          endingHour: "8",
          endingMinute: "00"
        },
        title: "Registration and Breakfast Networking",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: []
      },
      {
        id: 1,
        time: 
        {
          startingHour: "8",
          startingMinute: "00",
          meridian: "am",
          endingHour: "9",
          endingMinute: "00"
        },
        title: "Opening Remarks",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: []
      },
      {
        id: 2,
        time: 
        {
          startingHour: "9",
          startingMinute: "00",
          meridian: "am",
          endingHour: "10",
          endingMinute: "00"
        },
        title: "First Speaker",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: []
      },
      {
        id: 3,
        time: 
        {
          startingHour: "10",
          startingMinute: "00",
          meridian: "am",
          endingHour: "12",
          endingMinute: "00"
        },
        title: "Lunch",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: []
      }
      
    ],
    afternoonSessions: [
      {
        id: 0,
        // time: "11:30-1:30",
        time: 
          {
            startingHour: "12",
            startingMinute: "00",
            meridian: "pm",
            endingHour: "15",
            endingMinute: "00"
          },
        title: "Breakout Session",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: [
          {
            id: 0,
            title: "Big Data and Analytics",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 1,
            title: "AI and Machine Learning",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 2,
            title: "Internet of Things (IoT)",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 3,
            title: "Devops",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          }
        ]
      },
      {
        id: 1,
        time: 
        {
          startingHour: "15",
          startingMinute: "00",
          meridian: "pm",
          endingHour: "16",
          endingMinute: "00"
        },
        title: "Last Speaker",
        floorplan: {
          location: "Grand Ballroom",
          image: require("../../../assets/event.png")
        },
        events: [
          {
            id: 0,
            title: "Big Data and Analytics 4",
            floorplan: {
              location: "Grand Ballroom 4",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 1,
            title: "AI and Machine Learning",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 2,
            title: "Internet of Things (IoT)",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 3,
            title: "Devops",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          }
        ]
      },
      {
        id: 2,
        time: 
        {
          startingHour: "16",
          startingMinute: "00",
          meridian: "pm",
          endingHour: "17",
          endingMinute: "00"
        },
        title: "Closing Remarks",
        floorplan: {
          location: "Grand Ballroom 2",
          image: require("../../../assets/event.png")
        },
        events: [
          {
            id: 0,
            title: "Big Data and Analytics 2",
            floorplan: {
              location: "Grand Ballroom 2",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 1,
            title: "AI and Machine Learning",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 2,
            title: "Internet of Things (IoT)",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 3,
            title: "Devops",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          }
        ]
      },
      {
        id: 3,
        time: 
        {
          startingHour: "17",
          startingMinute: "00",
          meridian: "pm",
          endingHour: "18",
          endingMinute: "00"
        },
        title: "Dinner",
        floorplan: 
        {
          location: "Grand Ballroom 3",
          image: require("../../../assets/event.png")
        },
        events: [
          {
            id: 0,
            title: "Big Data and Analytics 3",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 1,
            title: "AI and Machine Learning",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 2,
            title: "Internet of Things (IoT)",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          },
          {
            id: 3,
            title: "Devops",
            floorplan: {
              location: "Grand Ballroom",
              image: require("../../../assets/event.png")
            }
          }
        ]
      }
    ],
    selectedIndex: 1
  };
  
  renderSessions(sessions){
    const session = sessions.map(({ id, time, title, events, floorplan}) => {
      if(events.length==0)
      {
        return (
          <View key={id} style={PageStyle.ListContainer}>
            <ListItem
              onPress={() => {
                this.setState(
                  {
                    selectedIndex: id
                  },
                  () => {
                    this.props.navigation.navigate("ScheduleDetailsPage",{
                      location: floorplan.location
                    })
                  }
                );
              }}
            >
              <View style={PageStyle.scheduleList}>
                <View>
                  <Text style={PageStyle.text}>
                    {time.startingHour}:{time.startingMinute} {time.meridian} - {time.endingHour}:{time.endingMinute} {time.meridian}
                  </Text>
                  <Text style={PageStyle.title}>
                    {title}
                  </Text>
                </View>
              </View>
            </ListItem>
          </View>
        );
      }
      else{
        return (
          <View key={id} style={PageStyle.ListContainer}>
            <Accordion
              sessionTitle={title}
              sessionTime={time}
              >
              {this.renderDropdownList(events)}
            </Accordion>
          </View>
        );
      }
    });
    return session;
  };

  renderDropdownList(events){
    const event = events.map(({ id, title}) => {
      return (
        <View key={id} style={PageStyle.dropdownList}>
          <ListItem
            onPress={() => {
              this.setState(
                {
                  selectedIndex: id
                },
                () => {
                  this.props.navigation.navigate("ScheduleDetailsPage",
                    {
                      location: events[id].floorplan.location
                    })
                }
              );
            }}
          >
            <View >
              <Text style={PageStyle.title}>
                {title}
              </Text>
            </View>
          </ListItem>
        </View>
      );
    });
    return event;
  };

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
        />
        <ScrollView>
          <Text style={PageStyle.header}> MORNING SESSION </Text>
          {this.renderSessions(this.state.morningSessions)}
          <Text style={PageStyle.header}> AFTERNOON SESSION </Text>
          {this.renderSessions(this.state.afternoonSessions)}
        </ScrollView>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default SchedulePage;
