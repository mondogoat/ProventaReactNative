import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Header, TabbedMenu, Card } from "../../components";
import PageStyle from "./styles";

class HomePage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="Strategy Meetings"
          onPress={() => navigation.openDrawer()}
        />
        <Card>
          <Image
            style={PageStyle.image}
            source={require("../../assets/event_1.png")}
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
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default HomePage;
