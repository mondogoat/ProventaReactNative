import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";
import ComponentStyle from "./styles";

class ModalScreen extends Component {
  state = {
    open: false
  };

  componentWillReceiveProps() {
    const { modalVisible, icon, name, title } = this.props;
    this.setState({ open: modalVisible });
    console.log(this.props);
  }

  toggleMenu() {
    this.setState({
      open: false
    });
  }

  renderFacilitator(icon, name, title) {
    return (
      <View style={ComponentStyle.container}>
        <TouchableOpacity
          style={ComponentStyle.closeButton}
          onPress={() => this.toggleMenu()}
        >
          <Image
            style={ComponentStyle.closeButton}
            source={require("../../assets/close_button.png")}
          />
        </TouchableOpacity>
        <ScrollView style={ComponentStyle.facilitatorContainer}>
          <View style={ComponentStyle.facilitatorList}>
            <View style={{ width: "25%" }}>
              <Image
                style={[
                  ComponentStyle.facilitatorIcon,
                  ComponentStyle.profileIcon
                ]}
                source={icon}
              />
            </View>
            <View style={{ width: "75%" }}>
              <Text style={ComponentStyle.facilitatorTitle}>{name}</Text>
              <Text style={ComponentStyle.facilitatorDescription}>{title}</Text>
            </View>
          </View>
          <View style={ComponentStyle.facilitatorBorder} />
          <Text style={ComponentStyle.description}>
            Seed round disruptive ownership user experience business-to-consumer
            series A financing learning curve early adopters supply chain.
            Incubator crowdsource A/B testing accelerator long tail
            business-to-business. Business-to-business bootstrapping conversion
            ecosystem metrics investor agile development low hanging fruit
            strategy infrastructure value proposition gamification
            business-to-consumer. Agile development product management
            business-to-business channels buyer iPad startup scrum project
            business model canvas. Analytics paradigm shift launch party MVP
            twitter traction technology responsive web design incubator
            graphical user interface burn rate business-to-consumer direct
            mailing user experience. Direct mailing learning curve vesting
            period. Social proof market technology pitch android advisor MVP
            client partner network customer investor. Disruptive agile
            development strategy hackathon influencer business-to-business scrum
            project accelerator stealth equity creative. Equity analytics
            business-to-business investor holy grail strategy non-disclosure
            agreement incubator channels android seed round crowdfunding agile
            development. Founders market hypotheses network effects
            business-to-consumer.
          </Text>
        </ScrollView>
      </View>
    );
  }

  render() {
    const { facilitator } = this.props;
    const { icon, name, title } = facilitator;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.open}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
          {this.renderFacilitator(icon, name, title)}
        </View>
      </Modal>
    );
  }
}

export { ModalScreen };
