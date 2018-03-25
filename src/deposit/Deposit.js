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

  getReward() {
    return (this.state.currentWeight.toFixed(2) * 152.23).toFixed(0);
  }

  animateChange(startTimer, endTimer, maxVal) {
    setTimeout(() => {
      this.setState({
        currentWeight:
          this.state.currentWeight + (maxVal - this.state.currentWeight) * 0.2
      });

      if (startTimer > endTimer) {
        this.setState({
          currentWeight: maxVal
        });
        const { screenProps } = this.props;
        screenProps.addPoints(this.getReward());
        screenProps.addRecycleCount(this.state.currentWeight);
      } else {
        this.animateChange(startTimer + 10, endTimer, maxVal);
      }
    }, 10);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: primaryColour
        }}
      >
        <Text style={{ fontSize: 18, color: "white" }}>
          Current Item Weight
        </Text>
        <Text
          style={{
            fontSize: 72,
            color: "white",
            fontWeight: "800",
            marginTop: -15
          }}
          onPress={() => {
            var randomNum = Math.random() * 5;
            this.animateChange(0, 300, randomNum);
          }}
        >
          {this.formatWeight()}
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            Total Reward Points
          </Text>
          <Text
            style={{
              fontSize: 72,
              color: "white",
              fontWeight: "800",
              marginTop: -15
            }}
          >
            {this.getReward()}
          </Text>
        </View>

        {/* <Button
          onPress={() => this.props.navigation.navigate("Confirmation")}
          title="Complete Weighing"
          color={accentColour}
          accessibilityLabel="Complete Weighing"
        /> */}
      </View>
    );
  }
}
