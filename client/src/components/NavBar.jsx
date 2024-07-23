import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
<nav className="flex flex-row justify-center items-center gap-20 m-5">
    <Link to='/'>Home</Link>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/add-flight'>Add flight</Link>
</nav>  
);
}
