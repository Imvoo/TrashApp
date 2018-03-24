import React from "react";
import BoxWrapper from "../boxwrapper/BoxWrapper";
import { primaryColour } from "../../style/AppTheme";
import { View, Text, StyleSheet } from "react-native";
import { Circle as ProgressCircle } from "react-native-progress";

export default class BinItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  render() {
    let child = (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 15
          }}
        >
          <ProgressCircle
            progress={
              this.props.item.current_weight / this.props.item.max_weight
            }
            color={"black"}
            unfilledColor={primaryColour}
            showsText={true}
            borderWidth={1}
          />
          <Text>full</Text>
        </View>
        <View>
          <Text style={styles.text}>{this.props.item.name}</Text>
          <Text style={styles.text}>{this.props.item.description}</Text>
          <Text style={styles.text}>
            {this.getDistanceFromLatLonInKm(
              this.props.currentLat,
              this.props.currentLon,
              this.props.item.lat,
              this.props.item.lon
            ).toFixed(2)}
          </Text>
        </View>
      </View>
    );

    return <BoxWrapper child={child} />;
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black"
  }
});
