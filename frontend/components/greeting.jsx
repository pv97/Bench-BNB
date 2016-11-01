import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  if (props.currentUser) {
    return(
      <div>
        <h1>Hello {props.currentUser.username}</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  } else {
    return(
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    );
  }

};
export default Greeting;
