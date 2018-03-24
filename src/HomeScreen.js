import React, { Component } from "react";
import { Text, View } from "react-native";
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";
import Dashboard from "./dashboard/Dashboard";

class HomeScreen1 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }

// export default TabNavigator({
//     Dashboard: { screen: Dashboard },
//     Home: { screen: HomeScreen1 },
// });


export default TabNavigator(
    {
        Dashboard: { screen: Dashboard },
        Home: { screen: HomeScreen1 },
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
        swipeEnabled: false
    });