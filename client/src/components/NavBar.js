import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <Link to="/">
            Home
        </Link>

        <Link to="/login">
            Login
        </Link>

      </header>
    </div>
  );
}

export default NavBar;
