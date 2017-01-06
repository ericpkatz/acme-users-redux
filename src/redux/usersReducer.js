import axios from 'axios';
import { editUser } from './editUserReducer';

const usersReducer = (state = [], action)=> {
  switch(action.type){
    case 'INIT_USER':
      state = action.users;
      break;
    case 'CREATED_USER':
      state = [...state, action.user];
      break;
    case 'UPDATED_USER':
      state = state.map( (user)=> user.id === action.user.id ? action.user : user);
      break;
    case 'DELETED_USER':
      state = state.filter( user=> user.id !== action.user.id);
      break;
  }
  return state;
};

export const fetchUsers = ()=> {
  return (dispatch)=> {
    axios.get('/api/users')
      .then( res => dispatch({ type: 'INIT_USER', users: res.data} ) );
  };
};

export const createUser = (user)=> {
  return (dispatch)=> {
    axios.post('/api/users', user)
      .then( res => dispatch({ type: 'CREATED_USER', user: res.data} ) );
  };
};

export const deleteUser = (user)=> {
  return (dispatch)=> {
    axios.delete(`/api/users/${user.id}`)
      .then( res => dispatch({ type: 'DELETED_USER', user: user} ) );
  };
};

export const updateUser = (user)=> {
  return (dispatch)=> {
    axios.patch(`/api/users/${user.id}`, user)
      .then( res => {
        dispatch({ type: 'UPDATED_USER', user: user} );
        dispatch(editUser(null));
      });
  };
};

export default usersReducer;
