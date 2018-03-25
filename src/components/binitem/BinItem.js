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
            formatText={() => {
              return (
                (
                  this.props.item.current_weight /
                  this.props.item.max_weight *
                  100
                ).toString() + "%"
              );
            }}
            color={primaryColour}
            showsText={true}
            borderWidth={1}
          />
          <Text>full</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.text && { color: "rgba(0,0,0,0.2)" }}>
            {this.props.item.name}
          </Text>
          <Text style={styles.text}>{this.props.item.description}</Text>
        </View>
        <View
          style={{
            flex: 0,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={
              styles.text && {
                color: "rgba(0,0,0,0.8)",
                fontSize: 35,
                fontWeight: "800"
              }
            }
          >
            {this.getDistanceFromLatLonInKm(
              this.props.currentLat,
              this.props.currentLon,
              this.props.item.lat,
              this.props.item.lon
            ).toFixed(1)}
          </Text>
          <Text style={styles.text && { marginTop: -10 }}>km</Text>
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
