import React, { Component } from "react";
import { View, Text } from "react-native";
import PageStyle from "./styles";
import { Header, TabbedMenu, Card } from "../../../../components";
class InboxDetailsPage extends Component {
  renderEmail() {
    const { navigation } = this.props;
    const title = navigation.getParam("title");
    const date = navigation.getParam("date");
    const body = navigation.getParam("body");
    return (
      <View>
        <Card>
          <View style={PageStyle.emailContainer}>
            <Text style={PageStyle.date}> {date} </Text>
            <Text style={PageStyle.title}> {title} </Text>
            <View style={PageStyle.border} />
            <Text style={PageStyle.body}> {body} </Text>
          </View>
        </Card>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label=" "
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {this.renderEmail()}
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default InboxDetailsPage;
