import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Header, InputBox, TabbedMenu, Card } from "../../../../components";
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
        <ScrollView>
          <Card>
            <View style={PageStyle.inputContainer}>
              <InputBox
                label="First Name"
                placeholder="John"
                onChangeText={() => console.log("first name")}
              />
              <InputBox
                label="Last Name"
                placeholder="Smith"
                onChangeText={() => console.log("last name")}
              />
              <InputBox
                label="Email Address"
                placeholder="proventa@proventa.com"
                onChangeText={() => console.log("email address")}
              />
              <InputBox
                label="Position"
                placeholder="CEO"
                onChangeText={() => console.log("Position")}
              />
              <InputBox
                label="Company"
                placeholder="Proventa International"
                onChangeText={() => console.log("Company")}
              />
              <InputBox
                label="Contact Number"
                placeholder="+63998 217 5566"
                onChangeText={() => console.log("Contact Number")}
              />
            </View>
          </Card>
        </ScrollView>
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default UserPage;
