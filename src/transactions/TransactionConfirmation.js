import React, { Component } from "react";
import BoxWrapper from "../components/boxwrapper/BoxWrapper";
import { Text, View, Button } from "react-native";
import { primaryColour, accentColour } from "../style/AppTheme";

export default class TransactionConfirmation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPoints: 0,
      currentCost: 0
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: "Redeem a Voucher - Confirmation"
    };
  };

  formatPoints() {
    return this.state.currentPoints.toFixed(0).toString();
  }

  getCost() {
    return this.state.currentCost.toFixed(0);
  }

  animateChange(startTimer, endTimer, maxVal) {
    setTimeout(() => {
      this.setState({
        currentPoints:
          this.state.currentPoints + (maxVal - this.state.currentPoints) * 0.2,
        currentCost:
          this.state.currentCost - (this.state.currentPoints - maxVal) * 0.2
      });

      if (startTimer > endTimer) {
        this.setState({
          currentPoints: maxVal,
          currentCost: 0
        });
      } else {
        this.animateChange(startTimer + 10, endTimer, maxVal);
      }
    }, 10);
  }

  componentWillMount() {
    const { navigation } = this.props;
    this.setState({
      currentPoints: navigation.state.params.user.points,
      currentCost: parseInt(navigation.state.params.itemCost)
    });
  }

  attemptToPay(points, cost) {
    if (cost > points) {
      return;
    } else {
      this.animateChange(0, 300, points - cost);
    }
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
          {this.formatPoints()}
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>Cost</Text>
          <Text
            style={{
              fontSize: 72,
              color: "white",
              fontWeight: "800",
              marginTop: -15
            }}
          >
            {this.getCost()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: "space-between"
            }}
          >
            <Button
              onPress={() => this.props.navigation.goBack(null)}
              title="Go Back"
              color={accentColour}
              accessiblityLabel="Go Back"
            />
          </View>
          <View
            style={{
              marginHorizontal: 20,
              justifyContent: "space-between"
            }}
          >
            <Button
              onPress={() => {
                this.attemptToPay(
                  this.state.currentPoints,
                  this.state.currentCost
                );
              }}
              title="Redeem"
              color={accentColour}
              accessibilityLabel="Redeem"
            />
          </View>
        </View>
      </View>
    );
  }
}
