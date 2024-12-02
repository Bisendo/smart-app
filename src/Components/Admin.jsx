import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdExitToApp, MdNotifications, MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa"; // Importing FaArrowUp
import  UserImage from '../images/image2.jpg'
import  ProductImage from '../images/product.jpg'
import OrderImage from '../images/image6.jpg'
import UsersImage from '../images/users.jpg'





const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-500">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 w-64 bg-blue-500 text-black flex-shrink-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-4">UzaNow</h1>
        </div>
        <nav className="space-y-2 ">
          <Link
            to="/dashboard"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdDashboard className="mr-2" size={20} />
            Dashboard
          </Link>

          <Link
            to="/products"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaShoppingCart size={20} color="white" className="mr-2" />
            Product
          </Link>

          <Link
            to="/orders"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaBox size={20} color="white" className="mr-2" />
            Orders
          </Link>

          <Link
            to="/sellers"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
      <FaUserTag size={20} className="mr-2" color="white" />
      Sellers
          </Link>

          <Link
            to="/users"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaUsers className="mr-2" color="white" size={20} />
            Users
          </Link>

          <Link
            to="/setting"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <FiSettings className="mr-2" size={20} color="white" />
            Setting
          </Link>

          <Link
            to="/admin_login"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdExitToApp className="mr-2 hover:text-white" size={20} />
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white relative">
        {/* Navbar */}
        <header className="bg-blue-500 shadow flex justify-between items-center px-4 py-4">
          {/* Toggle button for mobile */}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo and notification for mobile */}
          <div className="flex items-center space-x-4">
            <MdNotifications
              size={24}
              className="text-white md:hidden cursor-pointer"
            />
            {/* Profile Icon */}
            <FaUserCircle
              size={24}
              className="text-white md:hidden cursor-pointer"
            />
          </div>

          {/* Notification and Profile for desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <MdNotifications size={24} className="text-white cursor-pointer" />
            {/* Profile Icon */}
            <FaUserCircle size={24} className="text-white cursor-pointer" />
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

   
 <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <img
                src={ProductImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/products  "
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Products
                </Link>
              </p>
            </div>

            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <img
                src={OrderImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/orders"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Orders
                </Link>
              </p>
            </div>

            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <img
                src={UsersImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/users "
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Users
                </Link>
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <img
                src={UserImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/setting  "
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Setting
                </Link>
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Scroll-to-top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
      >
        <FaArrowUp size={24} />
      </button>

      {/* Overlay for Sidebar (Mobile Only) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default AdminPage;


