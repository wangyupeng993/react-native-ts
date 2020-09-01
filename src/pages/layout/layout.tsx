import 'react-native-gesture-handler';
import React,{Suspense} from "react";
import {Text} from "react-native";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {StackRoutes} from "../../router/routes";
import store from "../../redux";

const Stack = createStackNavigator();
const AppMain = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Suspense fallback={<Text>....</Text>}>
                    <Stack.Navigator initialRouteName={'TabNavigate'}>
                        {StackRoutes.map(item => {
                           return  <Stack.Screen key={item.path} name={item.name}
                                                 options={item.options}
                                                 component={item.component} />
                        })}
                    </Stack.Navigator>
                </Suspense>
            </NavigationContainer>
        </Provider>
    );
};

export default AppMain;
