import React, {Fragment} from 'react';
import {View,StatusBar,Platform} from "react-native";
import HeaderBar from "./HeaderBar";

function StatusHeader () {
    const {height} = HeaderBar();

    return (<Fragment>
        {Platform.OS === 'ios'?<View style={{paddingTop: height}} />:<StatusBar />}
    </Fragment>);
};

export default StatusHeader;
