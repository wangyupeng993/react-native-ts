import React from "react";

export const StackRoutes = [{
    path: '/tab',
    name: 'TabNavigate',
    options: {
        title: 'Tab路由'
    },
    component:  React.lazy(() => import('../pages/layout/Tab'))
},{
    path: '/login',
    name: 'Login',
    options: {
        title: '登陆'
    },
    component: React.lazy(() => import('../pages/login/login')),
},];

export const TabRouters = [{
    path: 'home',
    name: 'Home',
    options: {
        title: '首页'
    },
    component: React.lazy(() => import('../pages/home/Home'))
},{
    path: 'my',
    name: 'My',
    options: {title: '我的'},
    component: React.lazy(() => import('../pages/my/my'))
}];

export const DrawerRoutes = [];
