import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {StackRoutes} from "../../router/routes";

const Stack = createStackNavigator();
const StackNavigate = () => {
    return (<Stack.Navigator initialRouteName={'TabNavigate'}>
        {StackRoutes.map(item => {
            return  <Stack.Screen key={item.path} name={item.name}
                                  options={({route}) => item.options(route)}
                                  component={item.component} />
        })}
    </Stack.Navigator>);
};

export default StackNavigate;
