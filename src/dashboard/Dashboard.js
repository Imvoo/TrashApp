import React from "react";
import NameBox from "./namebox/NameBox";
import DollarBox from "./dollarbox/DollarBox";
import MapView from "../components/mapview/MapView";
import { primaryColour } from "../style/AppTheme";
import { StyleSheet, Text, ScrollView, View } from "react-native";

export default class Dashboard extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Home"
    };


  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.layout}
      >
        <View
          style={{
            height: 400,
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <NameBox name="Matty" />
          <DollarBox amount={50} />
        </View>

        <MapView height={300} width={"100%"}>


        </MapView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primaryColour,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
});
