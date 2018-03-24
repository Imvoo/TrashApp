import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { MapView as ExpoMapView } from "expo";

export default class MapView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ width: this.props.width, height: this.props.height }}>
        <ExpoMapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}

MapView.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
