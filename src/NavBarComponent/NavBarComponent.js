import React from 'react';
import { Link } from 'react-router-dom';

function NavBarComponent() {
  return (
    <div className='nav'>
      <span>Quizat</span>
      <ul>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          <li>Home</li>
        </Link>{' '}
        <Link to='/#' style={{ textDecoration: 'none', color: 'white' }}>
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBarComponent;
