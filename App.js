import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./src/HomeScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // [{"id":1,"username":"Anna","age":25,"address":"20 Apple Street","points":2}]
      user: {
        id: 1,
        username: "Anna",
        age: 25,
        address: "20 Apple Street",
        points: 34
      },
      // [{id, lat, lon, name, description, max_weight, current_weight},...]
      bins: [
        {
          id: 0,
          lat: 0,
          lon: 0,
          name: "Bin #1",
          description: "This bin accepts plastic products only.",
          max_weight: 10,
          current_weight: 5
        }
      ],
      recycleCount: 0,
      depositCount: 0
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
    return (
      <HomeScreen
        {...this.state}
        addPoints={pointsAdded => {
          this.addPoints(pointsAdded);
        }}
        addRecycleCount={recycleAdded => {
          this.addRecycleCount(recycleAdded);
        }}
        incrementDepositCount={() => {
          this.incrementDepositCount();
        }}
      />
    );
  }

  incrementDepositCount() {
    this.setState({ depositCount: this.state.depositCount + 1 });
  }

  addRecycleCount(recycleAdded) {
    const newRecycleCount = this.state.recycleCount + recycleAdded;
    this.setState({ recycleCount: newRecycleCount });
  }

  addPoints(pointsAdded) {
    const newUser = this.state.user;

    const newPoints =
      Number.parseInt(newUser.points) + Number.parseInt(pointsAdded);

    newUser.points = newPoints;

    this.setState({ user: newUser });
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
