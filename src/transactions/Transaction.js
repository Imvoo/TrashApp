import React, { Component } from "react";
import { Text, View } from "react-native";

import { primaryColour } from "../style/AppTheme";

class Transaction extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: "Transactions"
        };
      };

    render() {
        return(
            <View
                style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: primaryColour
                }}>
                <Text> Placeholder </Text>
                
            </View>
        );
    }
}

export default Transaction;