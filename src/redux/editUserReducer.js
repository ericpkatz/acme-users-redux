const editUserReducer = (id = null, action) => {
  switch(action.type){
    case 'EDIT_USERS':
      id = action.id;
      break;
  }
  return id;
};

export const editUser = id => (
    { type: 'EDIT_USERS', id: id }
);

export default editUserReducer;
