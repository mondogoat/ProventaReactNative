import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, TabbedMenu } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class CheckInPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="CHECK IN"
          status="loggedin"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <Text> This is Check In Page</Text>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default CheckInPage;
