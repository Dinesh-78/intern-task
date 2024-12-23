import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaUserFriends, FaChartBar, FaCog, FaQuestionCircle } from 'react-icons/fa';

const SidebarMenu = () => {
  return (
    <div className="h-screen bg-white shadow-lg w-64">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-4 border-b">
        <img
          src="/path-to-your-logo.png"
          alt="Quyl Logo"
          className="w-12 h-12"
        />
        <h1 className="text-xl font-bold text-black ml-2">Quyl.</h1>
      </div>

      {/* Menu Items */}
      <ul className="mt-6 space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaTachometerAlt className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaUserFriends className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chapter"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaBook className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Chapter</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaQuestionCircle className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Help</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaChartBar className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Reports</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 ${
                isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700'
              } hover:bg-gray-100`
            }
          >
            <FaCog className="text-gray-500 w-5 h-5" />
            <span className="ml-3">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
