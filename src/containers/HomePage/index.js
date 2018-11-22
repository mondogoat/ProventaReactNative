import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, TabbedMenu } from "../../components";
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
        <View style={PageStyle.container}>
          <Text> This is a Home Page</Text>
        </View>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default HomePage;
