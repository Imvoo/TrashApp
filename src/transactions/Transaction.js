import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

import { primaryColour } from "../style/AppTheme";

class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{ color: textColor }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

class Transaction extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
          title: "Transactions"
        };
      };
    
    _keyExtractor = (item, index) => item.id;
    
    _onPressItem = (id) => {
        const { screenProps } = this.props;
        
        this.props.navigation.navigate("TransactionConfirmation", {
            itemId: id,
            itemCost: id,
            user: screenProps.user
        })
    }

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            title={item.title}
            />
    );

    render() {
        const { screenProps } = this.props;

        return(
            <View
                style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: primaryColour
                }}>
                <FlatList
                    data = {[{
                        title: "Title text",
                        key: "item1",
                        cost: 2000,
                        id: 0
                    },
                    {
                        title: "Title text",
                        key: "item2",
                        cost: 3500,
                        id: 1
                    },{
                        title: "Title text",
                        key: "item3",
                        cost: 5000,
                        id: 2
                    }]}
                    keyExtractor = {this._keyExtractor}
                    renderItem = {this._renderItem}
                    />
                
            </View>
        );
    }
}

export default Transaction;