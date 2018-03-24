import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Deposit from "./Deposit";
import Confirmation from "./Confirmation";

export default StackNavigator(
    {
        Deposit: { screen: Deposit },
        Confirmation: { screen: Confirmation }
    },
    {
        // navigationOptions: ({ navigation }) => ({

        // })
    }
);