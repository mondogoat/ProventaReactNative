import React, { Component } from "react";
import { WebView } from "react-native";
import ComponentStyle from "./styles";

class Video extends Component {
  render() {
    const { videoSource } = this.props;
    return (
      <WebView
        style={ComponentStyle.WebViewContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        builtInZoomControls={false}
        startInLoadingState={false}
        allowsInlineMediaPlayback={true}
        source={{ uri: videoSource }}
      />
    );
  }
}

export { Video };
