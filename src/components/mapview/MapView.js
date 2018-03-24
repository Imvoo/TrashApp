import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { MapView as ExpoMapView } from "expo";
import bin from '../../../res/bin2.png';

export default class MapView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { binArray } = this.props;
    console.log(binArray);
    return (

      <View style={{ width: this.props.width, height: this.props.height }}>
        <ExpoMapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: -37.7980604,
            longitude: 144.9595426,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >


      {binArray.map((bin1) => (

          <ExpoMapView.Marker
            key={bin1.id}
            coordinate={{longitude:bin1.lon, latitude:bin1.lat}}
            title={bin1.name}
            description={bin1.description} >
              <Image source= {bin} style={{width:50, height:50}}/>
          </ExpoMapView.Marker>
        ))}
        </ExpoMapView>

        </View>


    );
  }
}

MapView.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
