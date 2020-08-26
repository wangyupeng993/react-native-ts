import React from "react";
import {View,Text,TouchableHighlight} from "react-native";

const Login = (props: any) => {
    const {navigation} = props;
    return (<TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <View>
            <Text>login</Text>
        </View>
    </TouchableHighlight>)
};

export default Login;
