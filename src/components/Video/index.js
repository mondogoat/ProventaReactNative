import React, { Component } from "react";
import { WebView } from "react-native";
import ComponentStyle from "./styles";

class Video extends Component {
  render() {
    let videoSource = {
      uri: "https://www.youtube.com/embed/mkualZPRZCs"
    };

    return (
      <WebView
        style={ComponentStyle.WebViewContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        builtInZoomControls={false}
        startInLoadingState={false}
        allowsInlineMediaPlayback={true}
        source={videoSource}
      />
    );
  }
}

export { Video };
