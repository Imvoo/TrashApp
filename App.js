import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./src/HomeScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      bins: []
    };
  }

  componentWillMount() {
    fetch("http://trash.imkevinvo.com:5000/user/1")
      .then(response => {
        response.json().then(data => {
          this.parseUserInformation(data);
        });
      })
      .catch(error => {
        console.log(error);
      });

    fetch("http://trash.imkevinvo.com:5000/all_bins")
      .then(response => {
        response.json().then(data => {
          this.parseBinInformation(data);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <HomeScreen {...this.state} />;
  }

  parseUserInformation(data) {
    // [{"id":1,"username":"Anna","age":25,"address":"20 Apple Street","points":2}]
    this.setState({ user: data[0] });
  }

  parseBinInformation(data) {
    // [{id, lat, lon, name, description, max_weight, current_weight},...]
    this.setState({ bins: data });
  }
}

export default App;
