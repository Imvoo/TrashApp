import React, { Component } from "react";
import { Text, View } from "react-native";
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import Dashboard from "./dashboard/Dashboard";
import DepositScreen from "./deposit/DepositScreen";



const TabScreen = TabNavigator(
    {
        Dashboard: { screen: Dashboard },
        Deposit: { screen: DepositScreen }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "DashBoard") {
                    iconName = `ios-information-circle${focused ? "" : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        animationEnabled: true,
        swipeEnabled: true
    });

export default StackNavigator({
    MyTab: {
        screen: TabScreen
    }
    },
    {
        headerMode: "screen"
    }
);