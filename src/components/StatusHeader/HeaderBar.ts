import {useEffect, useState} from 'react';
import {Platform,NativeModules} from "react-native";
const {StatusBarManager} = NativeModules;

const HeaderBar = () => {
    const [height,setBarHeight] = useState(StatusBarManager['HEIGHT']);

    useEffect(() => {
        if (Platform.OS === 'ios') setBarHeight(StatusBarManager['HEIGHT']);
        return () => {};
    },[]);

    return {height: height};
};

export default HeaderBar;
