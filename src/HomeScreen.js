import React, { Component } from "react";
import { Text, View } from "react-native";
import { primaryColour } from "./style/AppTheme";
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { Ionicons } from "@expo/vector-icons";
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import Dashboard from "./dashboard/Dashboard";
import DepositScreen from "./deposit/DepositScreen";
import MapScreen from "./map/MapScreen";
import TransactionScreen from "./transactions/TransactionScreen";

const TabScreen = TabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Deposit: { screen: DepositScreen },
    Map: { screen: MapScreen },
    Transaction: { screen: TransactionScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Dashboard") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Deposit") {
          iconName = `ios-trash${focused ? "" : "-outline"}`;
        } else if (routeName === "Map") {
          iconName = `ios-map${focused ? "" : "-outline"}`;
        } else if (routeName === "Transaction") {
            iconName = `ios-cart${focused ? "" : "-outline"}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: primaryColour,
      inactiveTintColor: "gray"
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    // initialRouteName: "Dashboard"
  }
);

const StackNav = StackNavigator(
  {
    MyTab: {
      screen: TabScreen
    }
  },
  {
    headerMode: "screen",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: primaryColour
      }
    }
  }
);

class StackContainer extends Component {
  componentWillMount() {}

  render() {
    console.log(this.props);

    const { user, bins } = this.props;

    console.log("stackcontainer" + this.props);
    return (
      <StackNav
        screenProps={{
          user: user,
          bins: bins
        }}
      />
    );
  }
}

export default StackContainer;
