import React, { Component } from "react";
import MapView from "../components/mapview/MapView";
import { primaryColour } from "../style/AppTheme";
import { ScrollView } from "react-native";
import BinUI from "./BinUI";

class Map extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Map"
    };
  };

  render() {
    const { screenProps } = this.props;
    const binArray = screenProps.bins;
    console.log("binArray: " + binArray);

    return (
      <ScrollView style={{ backgroundColor: primaryColour, height: "100%" }}>
        <MapView height={300} width={"100%"} />
        <BinUI {...screenProps} />
      </ScrollView>
    );
  }
}

export default Map;
