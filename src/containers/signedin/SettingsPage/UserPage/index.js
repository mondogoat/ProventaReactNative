import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "../../../../components";
import PageStyle from "./styles";

class UserPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="USER"
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export default UserPage;
