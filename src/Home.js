import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
  return(
    <div className="page">
      <h1>Login - Purav Barot Demo Portal</h1>
      <Link to="/private">
        <button type="button">
          Visit Sign-in page
        </button>
      </Link>
    </div>
  );
}

export default Home;
