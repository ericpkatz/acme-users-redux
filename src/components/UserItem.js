import React from 'React';

const UserItem = ({ user, deleteUser, editUser })=>(
    <li className='list-group-item'>
      { user.name }
      <button style={ { marginRight: '10px' }} className='btn btn-danger pull-right' onClick={()=> deleteUser(user)}>
        Delete
      </button>
      <button style={ { marginRight: '10px' }}  className='btn btn-primary pull-right' onClick={()=> editUser(user.id)}>
        Edit
      </button>
      <br style={{ clear: 'both' }} />
    </li>
);

export default UserItem;
