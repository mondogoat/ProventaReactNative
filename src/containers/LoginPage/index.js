import React, { Component } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import {
  Header,
  TabbedMenu,
  Card,
  StyledInput,
  MainButton,
  SocialButton
} from "../../components";
import PageStyle from "./styles";
import { DrawerActions } from "react-navigation";

class LoginPage extends Component {
  renderSocialLinks() {
    return (
      <View style={PageStyle.socialContainer}>
        <SocialButton
          type="linkedin"
          label="Log in with LinkedIn"
          icon={require("../../assets/linkedin.png")}
        />
        <SocialButton
          type="google"
          label="Log in with Google"
          icon={require("../../assets/google.png")}
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
          onChangeText={() => {
            console.log("email");
          }}
          icon={require("../../assets/login_user.png")}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          onChangeText={() => {
            console.log("password");
          }}
          icon={require("../../assets/login_password.png")}
          visibilityIcon={require("../../assets/login_eye.png")}
        />
      </View>
    );
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={PageStyle.container}>
        <Header
          label="LOGIN"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
        <ScrollView>
          <View style={PageStyle.card}>
            {this.renderLoginForm()}
            <MainButton
              onPress={() => console.log("mainbutton")}
              label="Login"
            />
            <View style={PageStyle.sectionLine} />
            {this.renderSocialLinks()}
            <Text style={PageStyle.signUpLabel}>Don't have an account?</Text>
            <Text style={PageStyle.signUpLink}> Sign up now </Text>
          </View>
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default LoginPage;
