import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRouters} from "../../router/routes";
import {setScreenOptions,setTabBarOptions} from "./methods";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (<Tab.Navigator tabBarOptions={setTabBarOptions()}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused,color,size}) => {
                                   const name = setScreenOptions(route,focused);
                                   return <Icon name={name} size={size} color={color} />
                               }
                           })}>
        {TabRouters.map((item) => {
            return (<Tab.Screen key={item.path} name={item.name}
                                options={() => item.options()}
                                component={item.component} />)
        })}
    </Tab.Navigator>);
};

export default TabNavigation;
