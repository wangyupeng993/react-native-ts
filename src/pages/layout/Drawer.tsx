import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerRoutes} from "../../router/routes";

const Drawer = createDrawerNavigator();
const DrawerNavigate = () => {
    return (<Drawer.Navigator>
        {DrawerRoutes.map((item: any) => {
            return <Drawer.Screen key={item.path} name={item.name}
                                  options={item.options}
                                  component={item.component} />
        })}
    </Drawer.Navigator>);
};

export default DrawerNavigate;
