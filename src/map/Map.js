import React, { Component } from "react";
import MapView from "../components/mapview/MapView";
import { View } from "react-native";
import BinUI from "./BinUI";

class Map extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            title: "Map"
        };
    }

    render() {
        return (
            <View>
                <MapView height={300} width={"100%"}/>
                <BinUI />
            </View>
        );
    }
}

export default Map;