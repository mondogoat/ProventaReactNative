import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  StackNavigator
} from "react-navigation";

// shared routes
import SplashPage from "./containers/shared/SplashPage";
import HomePage from "./containers/shared/HomePage";
import MeetingPage from "./containers/shared/MeetingPage";

//anonymous routes
import SearchPage from "./containers/anonymous/SearchPage";
import LoginPage from "./containers/anonymous/LoginPage";
import SignUpPage from "./containers/anonymous/SignUpPage";

//signedinroutes

import SettingsPage from "./containers/signedin/SettingsPage";
import UserPage from "./containers/signedin/SettingsPage/UserPage";
import CalendarPage from "./containers/signedin/SettingsPage/CalendarPage";
import NotificationPage from "./containers/signedin/SettingsPage/NotificationPage";
import InformationPage from "./containers/signedin/InformationPage";
import InformationDetailsPage from "./containers/signedin/InformationPage/InformationDetailsPage";
import FacilitatorDetailsPage from "./containers/signedin/InformationPage/FacilitatorDetailsPage";
import SchedulePage from "./containers/signedin/SchedulePage";
import ScheduleDetailsPage from "./containers/signedin//SchedulePage/ScheduleDetailsPage";
import InboxPage from "./containers/signedin/InboxPage";
import InboxDetailsPage from "./containers/signedin/InboxPage/InboxDetailsPage";
import CheckInPage from "./containers/signedin/CheckInPage";
import { SideMenu } from "../src/components";

import { PushNotificationIOS } from "react-native";
import Analytics from "@aws-amplify/analytics";
import PushNotification from "@aws-amplify/pushnotification";
import aws_exports from "../aws-exports";

//Middleware
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// PushNotification need to work with Analytics
Analytics.configure(aws_exports);
PushNotification.configure(aws_exports);
const SCREEN_WIDTH = Dimensions.get("window").width;

class App extends Component {
  componentDidMount() {
    PushNotification.onNotification(notification => {
      // Note that the notification object structure is different from Android and IOS
      console.log("in app notification", notification);

      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    });

    // get the registration token
    PushNotification.onRegister(token => {
      console.log("in app registration", token);
    });

    // get the notification data when notification is opened
    PushNotification.onNotificationOpened(notification => {
      console.log("the notification is opened", notification);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
  }
}

const SignedInStack = createStackNavigator(
  {
    // SplashPage: props => <SplashPage {...props} />,
    // HomePage: props => <HomePage {...props} />,
    MeetingLoginPage: props => <MeetingPage {...props} />,
    SettingsPage: props => <SettingsPage {...props} />,
    // insert user, calendar and notification if in use
    CalendarPage: props => <CalendarPage {...props} />,
    InformationPage: props => <InformationPage {...props} />,
    NotificationPage: props => <NotificationPage {...props} />,
    UserPage: props => <UserPage {...props} />,
    InformationDetailsPage: props => <InformationDetailsPage {...props} />,
    FacilitatorDetailsPage: props => <FacilitatorDetailsPage {...props} />,
    SchedulePage: props => <SchedulePage {...props} />,
    ScheduleDetailsPage: props => <ScheduleDetailsPage {...props} />,
    InboxPage: props => <InboxPage {...props} />,
    InboxDetailsPage: props => <InboxDetailsPage {...props} />,
    CheckInPage: props => <CheckInPage {...props} />
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AnonymousStack = createStackNavigator(
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
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const RootStack = createDrawerNavigator(
  {
    AnonymousStack: { screen: AnonymousStack },
    SignedInStack: { screen: SignedInStack }
  },
  {
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: SideMenu
  }
);

const AppStack = StackNavigator(
  {
    RootStack: { screen: RootStack }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
export default App;
