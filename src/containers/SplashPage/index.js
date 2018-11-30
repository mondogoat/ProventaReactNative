import React, { Component } from "react";
import { Image, View } from "react-native";
import PageStyle from "./styles";

class SplashPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("HomePage");
    }, 1000);
  }
  render() {
    return (
      <View style={PageStyle.container}>
        <Image
          style={PageStyle.splashScreen}
          source={require("../../assets/splash_image.png")}
        />
      </View>
    );
  }
}

export default SplashPage;
