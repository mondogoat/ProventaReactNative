import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Header, TabbedMenu } from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import { BarCodeScanner, Permissions, Constants, WebBrowser } from 'expo';


class CheckInPage extends Component {

  state = {
    hasCameraPermission: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  renderCamera() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text> Scan to check in.</Text>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={PageStyle.camera}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    WebBrowser.openBrowserAsync(data);
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
        {this.renderCamera()}
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default CheckInPage;
