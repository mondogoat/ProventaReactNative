import React, { Component } from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, StackNavigator } from "react-navigation";

import SplashPage from "./containers/SplashPage";
import HomePage from "./containers/HomePage";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import { SideMenu } from "../src/components";

class App extends Component {
  render() {
    return <AppStack />;
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomePage: { screen: HomePage }
  },
  {
    contentComponent: SideMenu
  }
);

const AppStack = StackNavigator(
  {
    SplashPage: props => <SplashPage {...props} />,
    HomePage: props => <HomePage {...props} />,
    SearchPage: props => <SearchPage {...props} />,
    LoginPage: props => <LoginPage {...props} />,
    SignUpPage: props => <SignUpPage {...props} />,
    Drawer: { screen: AppDrawerNavigator }
  },
  {
    initialRouteName: "SplashPage",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default App;
