import React, { Component } from "react";
import { View } from "react-native";
import { MapView } from "expo";
import ComponentStyle from "./styles";

class Map extends Component {
  render() {
    const { latitude, longitude, title } = this.props;
    return (
      <View style={ComponentStyle.container}>
        <MapView
          ref={ref => (this.mapView = ref)}
          style={ComponentStyle.map}
          provider="google"
          initialRegion={{
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude)
            }}
            title={title}
          />
        </MapView>
      </View >
    );
  }
}

export { Map };
