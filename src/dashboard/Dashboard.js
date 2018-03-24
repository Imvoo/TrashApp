import React from "react";
import NameBox from "./namebox/NameBox";
import DollarBox from "./dollarbox/DollarBox";
import MapView from "../components/mapview/MapView";
import { StyleSheet, Text, View } from "react-native";

export default class Dashboard extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
        title: "Home"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NameBox name="Matty" />
        <DollarBox amount={50} />

        {/* <MapView height={300} width={"100%"} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#74b9ff",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    minHeight: "100%"
  }
});
