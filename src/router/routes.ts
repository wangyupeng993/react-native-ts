import React from "react";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";

const headerPublic = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#00c9a9',
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0
    },
    headerTitleStyle: {}
};

export const StackRoutes = [{
    path: '/tab',
    name: 'TabNavigate',
    options: (route: Partial<any>) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        let title: string = '';
        switch (routeName) {
            case 'Home':
                title = '首页';
                break;
            case 'My':
                title = '个人中心';
                break;
            default:
                title = '';
        };
        return Object.assign({title},headerPublic);
    },
    component:  React.lazy(() => import('../pages/layout/Tab'))
},{
    path: '/login',
    name: 'Login',
    options: () => {
        return Object.assign({title: '登陆'},headerPublic);
    },
    component: React.lazy(() => import('../pages/login/login')),
},];

export const TabRouters = [{
    path: 'home',
    name: 'Home',
    options: () => {
        return Object.assign({title: '首页'},headerPublic);;
    },
    component: React.lazy(() => import('../pages/home/Home'))
},{
    path: 'my',
    name: 'My',
    options: () => {
        return Object.assign({title: '我的'},headerPublic);
    },
    component: React.lazy(() => import('../pages/my/my'))
}];

export const DrawerRoutes = [];
