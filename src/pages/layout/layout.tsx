import 'react-native-gesture-handler';
import React,{Suspense} from "react";
import {Text, StatusBar} from "react-native";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigate from "./Stack";
import store from "../../redux";

const AppMain = () => {
    return (
        <Provider store={store}>
            <StatusBar backgroundColor={'#00c9a9'} />
            <NavigationContainer>
                <Suspense fallback={<Text>....</Text>}>
                    <StackNavigate />
                </Suspense>
            </NavigationContainer>
        </Provider>
    );
};

export default AppMain;
