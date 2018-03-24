import React, { Component } from "react";
import BoxWrapper from "../components/boxwrapper/BoxWrapper";
import { Text, View, Button } from "react-native";
import { primaryColour, accentColour } from "../style/AppTheme";

export default class TransactionConfirmation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPoints: 0
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: "Confirmation"
    };
  };

  formatPoints() {
    return this.state.currentPoints.toString();
  }

  getCost() {
    return (this.state.currentPoints.toFixed(2) * 152.23).toFixed(0);
  }

  animateChange(startTimer, endTimer, maxVal) {
    setTimeout(() => {
      this.setState({
        currentPoints:
          this.state.currentWeight + (maxVal - this.state.currentPoints) * 0.2
      });

      if (startTimer > endTimer) {
        this.setState({
          currentPoints: maxVal
        });
      } else {
        this.animateChange(startTimer + 10, endTimer, maxVal);
      }
    }, 10);
  }

  componentWillMount() {
      const { navigation } = this.props;
      this.setState( { currentPoints: navigation.state.params.user.points } );
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
          onPress={() => {
            this.animateChange(0, 300, randomNum);
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
          <Text style={{ fontSize: 18, color: "white" }}>
            Cost
          </Text>
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
        <View style={{
            flexDirection: "row",
            alignItems: "center",
        }}>
            <View style={{
                marginHorizontal:20,
                justifyContent: "space-between"
            }} >
            <Button
                onPress={() => this.props.navigation.goBack(null)}
                title="Cancel"
                color={accentColour}
                accessiblityLabel="Cancel"
             />
             </View>
             <View style={{
                 marginHorizontal:20,
                 justifyContent: "space-between"
                 }} >
                <Button
                onPress={() => this.props.navigation.navigate("Confirmation")}
                title="Confirm"
                color={accentColour}
                accessibilityLabel="Confirm" />
            </View>
        </View>
      </View>
    );
  }
}
