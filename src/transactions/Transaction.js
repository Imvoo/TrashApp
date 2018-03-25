import React, { Component } from "react";

import { Text, View, FlatList, TouchableOpacity } from "react-native";

import TransactionItem from "../components/transactionitem/TransactionItem";

import { primaryColour } from "../style/AppTheme";

class Transaction extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Transactions"
    };
  };

  onPressItem(transactionItem) {
    const { screenProps } = this.props;

    this.props.navigation.navigate("TransactionConfirmation", {
      itemCost: transactionItem.input,
      transactionItem: transactionItem,
      user: screenProps.user
    });
  }

  render() {
    const transactionArray = [
      {
        transactionId: 0,
        input: "200",
        output: "5% off"
      },
      {
        transactionId: 1,
        input: "400",
        output: "15% off"
      },
      {
        transactionId: 2,
        input: "800",
        output: "35% off"
      },
      {
        transactionId: 3,
        input: "1000",
        output: "50% off"
      }
    ];

    let allTransactions = transactionArray.map(transactionItem => {
      return (
        <TransactionItem
          key={transactionItem.transactionId}
          item={transactionItem}
          onPress={transactionItem => {
            this.onPressItem(transactionItem);
          }}
        />
      );
    });

    return (
      <View style={{ backgroundColor: primaryColour, height: "100%" }}>
        <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
          {allTransactions != null ? allTransactions : null}
        </View>
      </View>
    );
  }
}

export default Transaction;
