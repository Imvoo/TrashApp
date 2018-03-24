import React from "react";
import NameBox from "./namebox/NameBox";
import ValueBox from "../components/valuebox/ValueBox";
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
    const {screenProps} = this.props;
    console.log("Dashboard:" + screenProps.user);
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.layout}
      >
        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <NameBox name={screenProps.user.username} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20
          }}
        >
          <ValueBox value={50} description={"points"} />
          <ValueBox value={3} description={"day streak"} />
          <ValueBox value={7} description={"deposits"} />
        </View>
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
  },
  layout: {
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%"
  }
});
