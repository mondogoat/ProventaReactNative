import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Header, TabbedMenu, Card, ListItem } from "../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class MeetingPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="MEETING DETAILS"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <ScrollView>
          <Card>
            <Image
              style={PageStyle.image}
              source={require("../../assets/meeting_1.png")}
            />
            <View style={PageStyle.info}>
              <Text style={PageStyle.description}>
                Digital Transformation Strategy Meeting APAC - Manila 2018
              </Text>
              <Text style={PageStyle.date}>
                22nd November 2018 | Marriot Grand Ballroom - Manila
              </Text>
            </View>
          </Card>
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default MeetingPage;
