import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack, FaUserCircle, FaStore } from "react-icons/fa";
import { MdContactMail, MdExitToApp, MdNotifications } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa"; // Importing FaArrowUp
import serviceImage from "../images/image7.jpg";
import SellerImage from "../images/about.jpg";
import AdminImage from "../images/image3.jpg";

const Dashboard = () => {
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
            to="/"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaHome size={20} className="mr-2" />
            Home
          </Link>

          <Link
            to="/admin_login"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaUserShield size={20} color="white" className="mr-2" />
            Admin
          </Link>

          <Link
            to="/seller_login"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaStore size={20} color="white" className="mr-2" />
            Seller
          </Link>

          <Link
            to="/service"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaServicestack size={20} className="mr-2" />
            Service
          </Link>

          <Link
            to="/aboutus"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdContactMail className="mr-2 hover:text-black" size={20} />
            About Us
          </Link>

          <Link
            to="/login"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <img
                src={serviceImage}
                alt="Our Services"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/service"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Service
                </Link>
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Seller</h3>
              <img
                src={SellerImage}
                alt="About Us"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/seller"
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Seller
                </Link>
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Admin</h3>
              <img
                src={AdminImage}
                alt="Contact"
                className="mt-4 w-full rounded"
              />
              <p className="mt-4 text-blue-600">
                <Link
                  to="/admin_login  "
                  className="bg-blue-600 text-white px-4 p-2 hover:bg-sky-700 rounded"
                >
                  Admin
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

export default Dashboard;
