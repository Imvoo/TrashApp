import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Transaction from "./Transaction";
import TransactionConfirmation from "./TransactionConfirmation";

export default StackNavigator(
    {
        Transaction: { screen: Transaction },
        TransactionConfirmation: { screen: TransactionConfirmation }
    },
    {
        headerMode: "none"
    }
);
