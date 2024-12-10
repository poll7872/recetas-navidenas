import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/add-recipe'>Add Recipe</Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/users'>users</Link>
      <Link to='/register-user'>Register User</Link>
    </nav>
  )
}

export default NavBar
