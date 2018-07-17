import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//app-reducers
import postsReducer from './postsReducer';


const mainReducer = combineReducers({
    posts: postsReducer
});


export default createStore(
    mainReducer,
    applyMiddleware(thunk)
);