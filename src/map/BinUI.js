import React, { Component } from "react";
import BinItem from "../components/binitem/BinItem";
import { getDistanceFromLatLonInKm } from "../utils";
import { Text, View } from "react-native";
import { primaryColour, accentColour } from "../style/AppTheme";

import { Circle as ProgressCircle } from "react-native-progress";

class BinUI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const binArray = this.props.bins;
    // default choose first bin
    const bin = binArray[0];

    let currentLat = -37.7980604;
    let currentLon = 144.9595426;

    let allBins = this.props.bins
      .sort((binOne, binTwo) => {
        let distance = getDistanceFromLatLonInKm(
          currentLat,
          currentLon,
          binOne.lat,
          binOne.lon
        ).toFixed(1);

        let distance2 = getDistanceFromLatLonInKm(
          currentLat,
          currentLon,
          binTwo.lat,
          binTwo.lon
        ).toFixed(1);

        return distance - distance2;
      })
      .map(binItem => {
        let distance = getDistanceFromLatLonInKm(
          currentLat,
          currentLon,
          binItem.lat,
          binItem.lon
        ).toFixed(1);

        return <BinItem key={binItem.id} item={binItem} distance={distance} />;
      });

    console.log("current_weight" + bin.current_weight);
    console.log("max_weight" + bin.max_weight);

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
        {allBins != null ? allBins : null}
      </View>
    );
  }
}

export default BinUI;
