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
// import { GoogleSignin, statusCodes } from "react-native-google-signin";

class LoginPage extends Component {

  componentDidMount() {
    // GoogleSignin.configure({
    //   iosClientId:
    //     "631979342854-a1s3b73lpv13rla3aq1uh07e6hntr9k3.apps.googleusercontent.com", //only for ios
    //   webClientId:
    //     "631979342854-v68oaojlkgttth4j9bqp103ea1po8egb.apps.googleusercontent.com" //only for android
    // });
    // this.getCurrentUser();
  }

  getCurrentUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  signIn = async () => {
    const { navigation } = this.props;
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true
      });
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info --> ", userInfo);
      if (userInfo) {
        navigation.navigate("MeetingPage", { status: "loggedin" });
      }
    } catch (error) {
      console.log("Message", error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User Cancelled the Login Flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Signing In");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play Services Not Available or Outdated");
      } else {
        console.log("Some Other Error Happened");
      }
    }
  };

  renderSocialLinks() {
    return (
      <View style={PageStyle.socialContainer}>
        <SocialButton
          type="linkedin"
          label="Log in with LinkedIn"
          icon={require("../../../assets/linkedin_button.png")}
          // onPress={this.signIn.bind(this)}
          onPress={() => { console.log("hello"); }}
        />
        <SocialButton
          type="google"
          label="Log in with Google"
          icon={require("../../../assets/google.png")}
          // onPress={this.signIn.bind(this)}
          onPress={() => { console.log("hello"); }}
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
          icon={require("../../../assets/login_user.png")}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          onChangeText={() => {
            console.log("password");
          }}
          icon={require("../../../assets/login_password.png")}
          visibilityIcon={require("../../../assets/login_eye.png")}
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
              onPress={() =>
                navigation.navigate("MeetingPage", { status: "loggedin" })
              }
              label="LOGIN"
            />
            <View style={PageStyle.sectionLine} />
            {this.renderSocialLinks()}
            <Text style={PageStyle.signUpLabel}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
              <Text style={PageStyle.signUpLink}> Sign up now </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TabbedMenu navigation={navigation} />
      </View>
    );
  }
}

export default LoginPage;
