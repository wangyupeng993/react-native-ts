import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './modules/app';
import User from './modules/user';

// 模块化 redux 进行合并
const Reducers = combineReducers({App,User});
const store = createStore(Reducers,compose(
    applyMiddleware(...[thunk])
));

export default store;
