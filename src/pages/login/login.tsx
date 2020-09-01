import React from "react";
import {View,Text,TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "../../redux/mapProps";

const Login = (props: commReactProps) => {
    const {navigation} = props;
    return (<TouchableHighlight onPress={() => navigation.navigate('TabNavigate')}>
        <View>
            <Text>login</Text>
        </View>
    </TouchableHighlight>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
