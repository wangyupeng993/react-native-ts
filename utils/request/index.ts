import axios from 'axios';
// const qs = require('querystring');

const service = axios.create({
    baseURL: '',
    timeout: 50000,
    responseType: 'json',
    // 向后端发送请求
    transformRequest: [request => request],
    // 后端返回数据
    transformResponse: [response => response]
});

// 请求前拦截
service.interceptors.request.use(config => {
    return config;
},error => error);

// 请求响应后拦截
service.interceptors.response.use(response => {
    return response;
},error => Promise.reject(error));

export default service;
