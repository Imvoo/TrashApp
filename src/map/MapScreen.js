import { StackNavigator } from "react-navigation";
import Map from "./Map";



export default StackNavigator(
    {
        Map: { screen: Map }
    },
    {
        headerMode: 
        "none"
    }
);