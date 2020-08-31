import React,{Fragment} from "react";
import {View,Text} from 'react-native';
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";

const Home = () => {
    return (<Fragment>
        <View>
            <Text>home</Text>
        </View>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
