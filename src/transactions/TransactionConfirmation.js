import React, { Component } from "react";
import BoxWrapper from "../components/boxwrapper/BoxWrapper";
import TransactionItem from "../components/transactionitem/TransactionItem";
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

  updateTransactionAmount() {
    const { screenProps } = this.props;

    this.setState({
      currentPoints: screenProps.user.points
    });
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
        const { navigation, screenProps } = this.props;
        setTimeout(() => {
          navigation.goBack(null);
        }, 600);
      } else {
        this.animateChange(startTimer + 10, endTimer, maxVal);
      }
    }, 10);
  }

  componentWillMount() {
    const { navigation, screenProps } = this.props;

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
      const { screenProps } = this.props;
      console.log(screenProps);
      screenProps.addPoints(-cost);
    }
  }

  render() {
    const { screenProps } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: primaryColour
        }}
      >
        <View
          style={{
            marginTop: 15
          }}
        >
          <TransactionItem
            item={this.props.navigation.state.params.transactionItem}
            onPress={null}
          />
        </View>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <Text style={{ fontSize: 12, color: "white", marginBottom: -10 }}>
            Balance
          </Text>
          <Text
            style={{
              fontSize: 50,
              color: "white",
              fontWeight: "800"
            }}
          >
            {this.formatPoints()}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
              marginTop: 15,
              marginBottom: -10
            }}
          >
            Voucher Cost
          </Text>
          <Text
            style={{
              fontSize: 50,
              color: "white",
              fontWeight: "800"
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
              color={"rgba(255,255,255,0.5)"}
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
