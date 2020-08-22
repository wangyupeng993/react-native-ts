import React,{Fragment,useState,useEffect} from 'react';
import {View,Text,StatusBar,Dimensions,NativeModules,Platform} from "react-native";
const {StatusBarManager} = NativeModules;

const App = () => {
    const {width,height} = Dimensions.get('window');
    const [BarHeight,setBarHeight] = useState(0);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            console.log(StatusBarManager['HEIGHT'],'StatusBarManager============');
            setBarHeight(StatusBarManager['HEIGHT']);
        };
        return () => {};
    },[]);
    return (<Fragment>
        <View style={{width: width,height: height,backgroundColor: '#8dc63f',paddingTop: BarHeight}}>
            <StatusBar backgroundColor={'blue'}></StatusBar>
            <Text>width: {width}</Text>
            <Text>height: {height}</Text>
        </View>
    </Fragment>);
};

export default App;
