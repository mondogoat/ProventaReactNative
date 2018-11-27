import React, { Component } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import ComponentStyle from "./styles";

class Map extends Component {
  render() {
    return (
      <View style={ComponentStyle.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={ref => (this.mapView = ref)}
          style={ComponentStyle.map}
          zoomEnabled={true}
          initialRegion={{
            latitude: 14.5574,
            longitude: 121.0197,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
          }}
          minZoomLevel={16}
          maxZoomLevel={20}
        />
      </View>
    );
  }
}

export { Map };
