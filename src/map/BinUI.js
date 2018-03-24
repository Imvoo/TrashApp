import React, { Component } from "react";
import { Text, View } from "react-native";
import { primaryColour, accentColour } from "../style/AppTheme";

import { Circle as ProgressCircle } from "react-native-progress";

class BinUI extends Component {
    render() {
        const binArray = this.props.bins;
        // default choose first bin
        const bin = binArray[0];

        console.log("current_weight" + bin.current_weight);
        console.log("max_weight" + bin.max_weight);

        return(
            <View>
                <View>
                    <ProgressCircle 
                        progress={bin.current_weight/bin.max_weight}
                        color={"white"}
                        unfilledColor={primaryColour}
                        showsText={true}
                        borderWidth={1}
                        size={100} />
                </View>
                <Text>
                    {this.props.user.username}
                </Text>
            </View>
        );
    }
}

export default BinUI;