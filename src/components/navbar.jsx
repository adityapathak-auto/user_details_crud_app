import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const Sidebar = () => {
  return (
    <nav className="flex flex-col bg-gradient-to-b from-purple-500 to-purple-700 text-white h-screen w-64">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your Logo</h1>
      </div>
      <ul className="flex-1 space-y-2 mt-4">
        <NavItem >Dashboard</NavItem>
        <NavItem to="/user">User Details</NavItem>
        <NavItem to="/" defaultSelected>
          User Management
        </NavItem>
        {/* Add more nav items as needed */}
      </ul>
    </nav>
  );
};

const NavItem = ({ to, children, defaultSelected }) => {
  const isActive = defaultSelected || window.location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center py-2 px-4 ${
          isActive ? 'bg-gradient-to-r from-blue-500 to-blue-700' : ''
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Sidebar;
