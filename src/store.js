import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { fetchUsers } from './redux/usersReducer';

import combinedReducers from './redux';


const store = createStore(combinedReducers, applyMiddleware(thunk));

store.dispatch(fetchUsers());

export default store;
