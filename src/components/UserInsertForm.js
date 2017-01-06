import React, { Component} from 'react';

class UserInsertForm extends Component{
  constructor(props){
    super(props);
    this.state = { name: '' };
  }
  onChangeName(e){
    this.setState({ name: e.target.value });
  }
  save(){
    this.props.createUser(this.state);
    this.setState({ name: '' });
  }
  render(){
    return (
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input value={ this.state.name } className='form-control' onChange={ this.onChangeName.bind(this) }/>
          </div>
          <div className='form-group'>
            <button className='btn btn-primary' disabled={ this.state.name.length == 0 } onClick={ this.save.bind(this) }>Save</button>
          </div>
        </form>
    );
  }
};

export default UserInsertForm;


