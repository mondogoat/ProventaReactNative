import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, InputBox } from "../../../../components";
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

        <InputBox
          label="Name"
          placeholder="Toni"
          onChangeText={() => console.log("name")}
        />
      </View>
    );
  }
}

export default UserPage;
