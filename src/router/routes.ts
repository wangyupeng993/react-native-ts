import React from "react";

const routes = [{
    path: '/login',
    name: 'Login',
    options: {title: '登陆'},
    component: React.lazy(() => import('../pages/login/login'))
},{
    path: '/home',
    name: 'Home',
    options: {title: '首页'},
    component:  React.lazy(() => import('../pages/home/Home'))
}];

export default routes;
