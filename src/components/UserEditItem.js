import React, { Component } from 'react';

class UserEditItem extends Component{
  constructor(props){
    super(props);
    this.state = { name: this.props.user.name };
  }
  handleNameChange(e){
    this.setState({ name: e.target.value });
  }
  render(){
    return (
      <li className='list-group-item'>
        <div className ='form-group'>
          <label>Name</label>
          <input className='form-control' value={ this.state.name } onChange={ this.handleNameChange.bind(this) }/>
        </div>
        <button className='btn btn-default pull-right' onClick={ ()=> this.props.editUser(null) }>Cancel</button>
        <button className='btn btn-primary pull-right' onClick={ ()=> this.props.updateUser({ id: this.props.user.id, name: this.state.name }) }>Save</button>
        <br style={{ clear: 'both' }} />
      </li>
    );
  }
}

export default UserEditItem;
