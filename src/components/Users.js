import React from 'react';
import { connect } from 'react-redux';
import { createUser, deleteUser, updateUser } from '../redux/usersReducer';
import { editUser } from '../redux/editUserReducer';
import UserItem from './UserItem';
import UserInsertForm from './UserInsertForm';
import UserEditItem from './UserEditItem';

const Users = ({ users, createUser, deleteUser, editUser, editingUserId, updateUser })=>(
    <div className='well'>
      { editingUserId }
      <UserInsertForm createUser={ createUser }></UserInsertForm>
      <ul className='list-group'>
        { 
          users.map( user => editingUserId == user.id ? <UserEditItem updateUser={ updateUser } editUser={ editUser } key={user.id} user={ user } /> : <UserItem key={ user.id} user={user} deleteUser={ deleteUser } editUser={ editUser }></UserItem>) 
        }
      </ul>
    </div>
);

const mapStateToProps = ({ users, editingUserId })=> (
    { users, editingUserId }
);

const mapDispatchToProps = { createUser, deleteUser, editUser, updateUser };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
