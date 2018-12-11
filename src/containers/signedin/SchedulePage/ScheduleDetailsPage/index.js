import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Header,
  TabbedMenu
} from "../../../../components";
import PageStyle from "./styles";
class ScheduleDetailsPage extends Component {
  render() {
    const { navigation }  = this.props;
    const floorplan = navigation.getParam("location");
    return (
      <View style={PageStyle.container}>
        <Header
          label="SCHEDULE DETAILS"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>
          <Text>
            LOCATION
          </Text>
          <Text>
            {floorplan}
          </Text>
        </ScrollView>
        <TabbedMenu status="loggedin" navigation={navigation} />
      </View>
    );
  }
}

export default ScheduleDetailsPage;
