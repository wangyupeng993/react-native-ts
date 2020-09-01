import React,{Fragment} from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";

const My = () => {
    return (<Fragment>
        <View>
            <Text>我的个人中心</Text>
        </View>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(My);
