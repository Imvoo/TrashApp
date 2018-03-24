import React, { Component } from "react";
import BinItem from "../components/binitem/BinItem";
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

    let allBins = this.props.bins.map(binItem => {
      console.log(binItem);
      return (
        <BinItem
          key={binItem.id}
          item={binItem}
          currentLat={-37.7980604}
          currentLon={-144.9595426}
        />
      );
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
