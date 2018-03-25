import React, { Component } from "react";
import { Animated } from "react-native";

class Bottle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bottleX: new Animated.Value(-300 + Math.random() * 500),
      bottleY: new Animated.Value(-400),
      bottleSpin: new Animated.Value(0),
      bottleOpacity: new Animated.Value(1)
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.spinTheBottle();
    }, this.props.delay);
  }

  spinTheBottle() {
    Animated.parallel([
      Animated.timing(this.state.bottleX, {
        toValue: 50 + Math.random() * 100,
        duration: 3000,
        useNativeDriver: true
      }),
      Animated.timing(this.state.bottleY, {
        toValue: 150,
        duration: 3000,
        useNativeDriver: true
      }),
      Animated.timing(this.state.bottleSpin, {
        toValue: Math.random(),
        duration: 3000,
        useNativeDriver: true
      }),
      Animated.timing(this.state.bottleOpacity, {
        toValue: 0,
        duration: 3200,
        useNativeDriver: true
      })
    ]).start(() => {
      this.setState({
        bottleX: new Animated.Value(-300 + Math.random() * 500),
        bottleY: new Animated.Value(-400),
        bottleSpin: new Animated.Value(0),
        bottleOpacity: new Animated.Value(1)
      });

      this.spinTheBottle();
    });
  }

  render() {
    return (
      <Animated.Image
        style={{
          position: "absolute",
          opacity: this.state.bottleOpacity,
          transform: [
            { translateX: this.state.bottleX },
            { translateY: this.state.bottleY },
            { scaleX: 0.1 },
            { scaleY: 0.1 },
            {
              rotate: this.state.bottleSpin.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
              })
            }
          ]
        }}
        source={require("../../../res/bottle.png")}
      />
    );
  }
}

export default Bottle;
