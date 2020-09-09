import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRouters} from "../../router/routes";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (<Tab.Navigator tabBarOptions={{activeTintColor: '#00c9a9',inactiveTintColor: '#9AB0C9'}}>
        {TabRouters.map((item) => {
            return (<Tab.Screen key={item.path} name={item.name}
                                options={() => item.options()}
                                component={item.component} />)
        })}
    </Tab.Navigator>);
};

export default TabNavigation;
