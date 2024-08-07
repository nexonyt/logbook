import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
<nav className="flex flex-col items-center gap-6 py-24 w-44  h-dvh bg-[#131218]	">
    <Link to='/'>Home</Link>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/add-flight'>Add flight</Link>
    <Link to='/stats'>Statystyki</Link>
</nav>  
);
}
