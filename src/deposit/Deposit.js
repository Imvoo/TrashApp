import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Deposit extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: "Deposit Screen"
        };
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> wowee </Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Confirmation")}
                    title="push me daddy"
                    color="red"
                    accessibilityLabel="yes baby do it" />
                
            </View>
        );
    }


}