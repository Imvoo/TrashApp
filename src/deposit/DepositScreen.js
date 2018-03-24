import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Deposit from "./Deposit";
import Confirmation from "./Confirmation";

const StackNav = StackNavigator(
    {
        Deposit: { screen: Deposit },
        Confirmation: { screen: Confirmation }
    },
    {
        headerMode: "none"
    }
);

export default class DepositContainer extends Component {
    render() {
        const { screenProps } = this.props;

        return (
            <StackNav screenProps={screenProps} />
        )
    }
}