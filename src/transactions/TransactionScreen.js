import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Transaction from "./Transaction";
import TransactionConfirmation from "./TransactionConfirmation";

const StackNav = StackNavigator(
    {
        Transaction: { screen: Transaction },
        TransactionConfirmation: { screen: TransactionConfirmation }
    },
    {
        headerMode: "none"
    }
);

export default class TransactionContainer extends Component {
    render() {
        // const { screenProps } = this.props;

        return (
            <StackNav /*screenProps={screenProps}*/ />
        )
    }
}