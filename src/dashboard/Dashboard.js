import React from "react";
import NameBox from "./namebox/NameBox";
import DollarBox from "./dollarbox/DollarBox";
import MapView from "../components/mapview/MapView";
import { StyleSheet, Text, View } from "react-native";

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <NameBox name="Matty" />
        <DollarBox amount={50} />

        <MapView height={300} width={"100%"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  }
});
