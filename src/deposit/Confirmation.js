import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class Confirmation extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: "Confirmation Screen"
        };
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> wowee </Text>
                <Button
                    onPress={() => this.props.navigation.goBack() }
                    title="beam me up scotty"
                    color="red"
                    accessibilityLabel="yes baby do it" />
                
            </View>
        );
    }
}

export default Confirmation;