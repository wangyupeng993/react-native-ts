import 'react-native-gesture-handler';
import React from "react";
import {Provider,connect} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import store from "../../redux";
import Home from "../home/Home";
import Login from "../login/login";

const Stack = createStackNavigator();
const AppMain = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Login'}>
                    <Stack.Screen name={'Login'} component={Login}></Stack.Screen>
                    <Stack.Screen name={'Home'} component={Home} options={{title: ''}}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default AppMain;
