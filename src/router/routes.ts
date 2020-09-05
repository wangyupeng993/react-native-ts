import React from "react";
import {getFocusedRouteNameFromRoute} from "@react-navigation/core";

const headerPublic = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#00c9a9'
    },
    headerTitleStyle: {}
};

export const StackRoutes = [{
    path: '/tab',
    name: 'TabNavigate',
    options: {
        title: (route: Partial<any>) => {
            const routeName = getFocusedRouteNameFromRoute(route);
            switch (routeName) {
                case 'Home':
                    return '首页';
                    break;
                case 'My':
                    return '个人中心';
                    break;
                default:
                    return '';
            }
        },
        ...headerPublic
    },
    component:  React.lazy(() => import('../pages/layout/Tab'))
},{
    path: '/login',
    name: 'Login',
    options: {
        title: () => '登陆',
        ...headerPublic
    },
    component: React.lazy(() => import('../pages/login/login')),
},];

export const TabRouters = [{
    path: 'home',
    name: 'Home',
    options: {
        title: '首页',
        ...headerPublic
    },
    component: React.lazy(() => import('../pages/home/Home'))
},{
    path: 'my',
    name: 'My',
    options: {
        title: '我的',
        ...headerPublic
    },
    component: React.lazy(() => import('../pages/my/my'))
}];

export const DrawerRoutes = [];
