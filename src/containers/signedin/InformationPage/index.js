import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, TabbedMenu } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class InformationPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="INFORMATION"
          status="loggedin"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Text> This is Information Page</Text>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default InformationPage;
