import React from "react";
import NameBox from "./namebox/NameBox";
import ValueBox from "../components/valuebox/ValueBox";
import MapView from "../components/mapview/MapView";
import Bottle from "../components/bottle/Bottle";
import { primaryColour } from "../style/AppTheme";
import { StyleSheet, Text, ScrollView, View, Image } from "react-native";

export default class Dashboard extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Home"
    };
  };

  render() {
    const { screenProps } = this.props;
    console.log("Dashboard:" + screenProps.user);
    let bottles = [];

    for (let i = 0; i < 3; i++) {
      bottles.push(<Bottle key={i} delay={Math.random() * 3000} />);
    }

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.layout}
      >
        <Image
          style={{ position: "absolute", bottom: 0, right: 0, opacity: 0.5 }}
          source={require("../../res/bin.png")}
        />

        {bottles}

        <View
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <NameBox name={screenProps.user.username} recycleCount={screenProps.recycleCount }/>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20
          }}
        >
          <ValueBox value={screenProps.user.points} description={"points"} />
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
