import React,{Fragment} from 'react';
import {View,Text,Dimensions,StyleSheet} from "react-native";
import {main,bg} from "./src/assets/css";
import StatusHeader from "./src/components/StatusHeader";

const App = () => {
    const {width,height} = Dimensions.get('window');
    return (<Fragment>
        <View style={Style.container}>
            <StatusHeader></StatusHeader>
            <Text>width: {width}</Text>
            <Text>height: {height}</Text>
        </View>
    </Fragment>);
};

const Style = StyleSheet.create({
    container: {
        ...main.container,
        ...bg.cyan
    }
});
export default App;
