import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Header, TabbedMenu } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import QRCodeScanner from "react-native-qrcode-scanner";

class CheckInPage extends Component {
  state = {
    isAuthorized: false
  };
  onSuccess(e) {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  }

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
          settings={() =>
            navigation.navigate("SettingsPage", {
              content: "settings",
              previousRoute: "CheckInPage"
            })
          }
        />
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={<Text>Scan QR Code to check in</Text>}
        />
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default CheckInPage;
