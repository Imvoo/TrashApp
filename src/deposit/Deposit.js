import React, { Component } from "react";
import BoxWrapper from "../components/boxwrapper/BoxWrapper";
import { Text, View, Button } from "react-native";
import { primaryColour, accentColour } from "../style/AppTheme";

export default class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeight: 0
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Deposit Screen"
    };
  };

  formatWeight() {
    return this.state.currentWeight.toFixed(2).toString() + " kg";
  }

  render() {
    let weight = (
      <Text style={{ fontSize: 72, color: accentColour }}>
        {this.formatWeight()}
      </Text>
    );

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: primaryColour,
          paddingHorizontal: 20
        }}
      >
        <BoxWrapper child={weight} />
        <Button
          onPress={() => this.props.navigation.navigate("Confirmation")}
          title="push me daddy"
          color="red"
          accessibilityLabel="yes baby do it"
        />
      </View>
    );
  }
}
