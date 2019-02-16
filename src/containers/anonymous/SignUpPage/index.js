import React, { Component } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import {
  Header,
  TabbedMenu,
  Card,
  StyledInput,
  MainButton,
  SocialButton
} from "../../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";
import { connect } from "react-redux";
import { signUp, updateAuth } from "../../../actions";

class SignUpPage extends Component {
  renderSocialLinks() {
    return (
      <View style={PageStyle.socialContainer}>
        <SocialButton
          type="linkedin"
          label="Sign up with LinkedIn"
          icon={require("../../../assets/linkedin_button.png")}
        />
        <SocialButton
          type="google"
          label="Sign up with Google"
          icon={require("../../../assets/google.png")}
        />
      </View>
    );
  }
  renderLoginForm() {
    return (
      <View>
        <StyledInput
          type="email"
          placeholder="Email Address"
          onChangeText={(value) => {
            this.props.updateAuth({ prop: "email", value })
          }}
          icon={require("../../../assets/login_user.png")}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          onChangeText={(value) => {
            this.props.updateAuth({ prop: "password", value })
          }}
          icon={require("../../../assets/login_password.png")}
          visibilityIcon={require("../../../assets/login_eye.png")}
        />
      </View>
    );
  }

  clickSignUp() {
    const data = {
      email: this.props.email.value,
      password: this.props.password.value
    }

    console.log(data);
    this.props.signUp(data);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="SIGN UP"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <ScrollView>
          <View style={PageStyle.card}>
            {this.renderLoginForm()}
            <Text style={PageStyle.subText}> Minimum of 6 characters </Text>
            <MainButton
              onPress={() => this.clickSignUp()}
              label="SIGN UP"
            />
            <View style={PageStyle.sectionLine} />
            {this.renderSocialLinks()}
          </View>
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};

export default connect(
  mapStateToProps,
  { signUp, updateAuth }
)(SignUpPage);


