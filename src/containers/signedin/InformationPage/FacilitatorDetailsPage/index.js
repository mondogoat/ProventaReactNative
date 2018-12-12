import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Header, TabbedMenu, Card } from "../../../../components";
import PageStyle from "./styles";

class FacilitatorDetailsPage extends Component {
  state = {
    description:
      "Metrics ownership infrastructure alpha. IPhone validation user experience ecosystem paradigm shift first mover advantage business model canvas analytics investor advisor. Prototype channels value proposition research & development sales. Leverage business-to-business social proof infrastructure graphical user interface supply chain vesting period freemium crowdfunding startup bandwidth entrepreneur first mover advantage interaction design. Advisor network effects venture hackathon freemium customer success termsheet creative growth hacking traction. Crowdsource user experience growth hacking beta virality disruptive founders venture pitch first mover advantage. Sales beta assets low hanging fruit growth hacking conversion android. Metrics release pivot venture user experience analytics conversion rockstar lean startup strategy infographic stealth stock low hanging fruit. Social proof series A financing advisor. Gen-z stock iPhone first mover advantage incubator low hanging fruit vesting period buzz value proposition buyer release."
  };

  renderSocialButton() {
    return (
      <View style={PageStyle.socialContainer}>
        <Image
          source={require("../../../../assets/linkedin.png")}
          style={PageStyle.socialButton}
        />
        <Image
          source={require("../../../../assets/website_icon.png")}
          style={PageStyle.socialButton}
        />
      </View>
    );
  }

  renderContent() {
    const { navigation } = this.props;
    const icon = navigation.getParam("icon");
    const title = navigation.getParam("title");
    const name = navigation.getParam("name");

    return (
      <ScrollView>
        <Card>
          <View style={PageStyle.profileContainer}>
            <Image source={icon} style={PageStyle.icon} />
            <Text style={PageStyle.name}> {name} </Text>
            <Text style={PageStyle.title}> {title} </Text>
            {this.renderSocialButton()}
            <View style={PageStyle.border} />
            <Text style={PageStyle.description}>{this.state.description}</Text>
            <Text />
          </View>
        </Card>
      </ScrollView>
    );
  }

  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    return (
      <View style={PageStyle.container}>
        <Header
          label="FACILITATOR DETAILS"
          status="details"
          onPress={() => {
            navigation.goBack();
          }}
        />
        {this.renderContent()}
        <TabbedMenu navigation={navigation} status="loggedin" />
      </View>
    );
  }
}

export default FacilitatorDetailsPage;
