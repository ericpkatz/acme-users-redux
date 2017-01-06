import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children })=> (
    <div className='container'>
      <ul className='nav nav-tabs' style={{ marginBottom: '10px' }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
      { children }
    </div>
); 

export default Layout;
