import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./src/HomeScreen";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "user": "wowwioewjrwioe",
      "bins": "multiple bins yay"
    }
  }

  componentWillMount() {
    axios.get("http://trash.imkevinvo.com:3456/user/1")
      .then((response) => {
        this.parseUserInformation(response.data);
      }).catch((error) => {
        console.log(error);
      });

    axios.get("http://trash.imkevinvo.com:5000/bins")
      .then((response) => {
        this.parseBinInformation(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  render() {
    const screenProps = {
      user: this.state.user,
      bins: this.state.bins
    }

    console.log("app: " + screenProps);
    return <HomeScreen {...this.state} />
  }

  parseUserInformation(data) {
    // [{"id":1,"username":"Anna","age":25,"address":"20 Apple Street","points":2}]
    this.setState( { user:data[0] } );
  }
}

export default App;
