import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, TabbedMenu } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
class SchedulePage extends Component {
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
        <Text> This Schedule Page</Text>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default SchedulePage;
