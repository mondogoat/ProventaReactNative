import React, { Component } from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, StackNavigator } from "react-navigation";

import SplashPage from "./containers/SplashPage";
import HomePage from "./containers/HomePage";
import SearchPage from "./containers/SearchPage";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import MeetingPage from "./containers/MeetingPage";
import { SideMenu } from "../src/components";

const SCREEN_WIDTH = Dimensions.get("window").width;

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

// const AppStack = StackNavigator(
//   {
//     SplashPage: props => <SplashPage {...props} />,
//     HomePage: props => <HomePage {...props} />,
//     SearchPage: props => <SearchPage {...props} />,
//     LoginPage: props => <LoginPage {...props} />,
//     SignUpPage: props => <SignUpPage {...props} />
//     // Drawer: { screen: AppDrawerNavigator }
//   },
//   {
//     initialRouteName: "SplashPage",
//     headerMode: "none",
//     navigationOptions: {
//       headerVisible: false
//     }
//   }
// );

const RootStack = createDrawerNavigator(
  {
    SplashPage: props => <SplashPage {...props} />,
    HomePage: props => <HomePage {...props} />,
    SearchPage: props => <SearchPage {...props} />,
    LoginPage: props => <LoginPage {...props} />,
    SignUpPage: props => <SignUpPage {...props} />,
    MeetingPage: props => <MeetingPage {...props} />
  },
  {
    intialRouteName: "SplashPage",
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: SideMenu
  }
);

const AppStack = StackNavigator(
  {
    RootStack: { screen: RootStack }
  },
  {
    headerMode: "none"
  }
);
export default App;
