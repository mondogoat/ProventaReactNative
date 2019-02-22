import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import {
  Header,
  TabbedMenu,
  Card,
  ListItem
} from "../../../../components";
import PageStyle from "./styles";
class ScheduleDetailsPage extends Component {


  
  renderEventDetails(){
    const { navigation }  = this.props;
    const eventTitle = navigation.getParam("eventTitle");
    const description = navigation.getParam("description");
    const name = navigation.getParam("name");
    const nameTitle = navigation.getParam("nameTitle");
    const topic = navigation.getParam("topic");
    if(eventTitle){
      return(
        <View>
          <Text style={PageStyle.header}>
            ABOUT
          </Text>
          <Card>
            <View style={PageStyle.detailsContainer}>
              <Text style={PageStyle.title}>{topic}</Text>
              <Text style={PageStyle.text}>{description}</Text>
            </View>
            <View style={PageStyle.listContainer}>
              <ListItem>
                <View style={PageStyle.speakerContainer}>
                  <View>
                    <Text style={PageStyle.title}>{name}</Text>
                    <Text style={PageStyle.text}>{nameTitle}</Text>
                  </View>
                  <View style={PageStyle.linkedInContainer}>
                    <Image
                        style={PageStyle.linkedInButton}
                        source={require("../../../../assets/linkedin.png")}
                      />
                  </View>
                </View>
              </ListItem>
            </View>
            
          </Card>
        </View>
      );
    }

  }


  render() {
    const { navigation }  = this.props;
    const location = navigation.getParam("location");
    const floorplan = navigation.getParam("imageURL");
    const label =navigation.getParam("label");
    return (
      <View style={PageStyle.container}>
        <Header
          label={label.toUpperCase()}
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
          // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>
          {this.renderEventDetails()}
          <Text style={PageStyle.header}>
            LOCATION
          </Text>
          <Card>
            <View style={PageStyle.locationContainerStyle}>
              <View>
                <Text style={PageStyle.title}>
                  {location}
                </Text>
              </View>
              <View>
               <Image source={require("../../../../assets/checkin_button.png")} style={PageStyle.locationIconStyle}/>
              </View>
            </View>
            {/* <Image source={floorplan}  style={PageStyle.mapImage/> */}
            <Image source={require("../../../../assets/floor_map.png")} style={PageStyle.mapImage}/>
          </Card>
          
        </ScrollView>
        <TabbedMenu status="loggedin" navigation={navigation} />
      </View>
    );
  }
}

export default ScheduleDetailsPage;
