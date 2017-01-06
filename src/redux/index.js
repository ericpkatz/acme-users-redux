import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import editUserReducer from './editUserReducer';

const combinedReducers = combineReducers({
  users: usersReducer,
  editingUserId: editUserReducer
});

export default combinedReducers;
