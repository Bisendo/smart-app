import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserCircle,FaStore, FaArrowUp } from "react-icons/fa";
import {
  MdContactMail,
  MdExitToApp,
  MdDashboard,
  MdNotifications,
} from "react-icons/md"; // Added Notifications Icon
import serviceImage from "../images/image8.jpg";

const ServicePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <nav className="space-y-2">
          <Link
            to="/"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaHome size={20} className="mr-2" />
            Home
          </Link>


          <Link
            to="/seller_login"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaStore size={20} color="white" className="mr-2" />
            Seller
          </Link>

          <Link
            to="/aboutus"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdContactMail className="mr-2 hover:text-black" size={20} />
            About Us
          </Link>

          <Link
            to="/dashboard"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdDashboard className="mr-2" size={20} />
            Dashboard
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
        <header className="bg-blue-500 shadow flex justify-between items-center px-4 py-4 z-20">
          {/* Toggle button for mobile */}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Card Components */}

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Repeat for other cards */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  src={serviceImage}
                  alt="Service"
                  className="w-full h-48 object-cover rounded shadow-lg"
                />
              </div>
              <div className="mt-4">
                <p className="mt-2 text-black font-bold text-center">Bag</p>
                <p className="mt-2 text-black font-bold text-center">
                  Quantity{" "}
                  <span className="font-black text-blue-700">: 12</span>
                </p>
                <p className="mt-2 text-black font-bold text-center">
                  Phone Number: <br />
                  <span className="font-black text-blue-700">
                    +255 655 344 222
                  </span>
                </p>
                <p className="mt-2 text-gray-600 font-bold text-center">
                  Tsh 12000/=
                </p>
                <div className="flex justify-center items-center">
                  <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* ...Your Card Components Here */}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      </main>

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

export default ServicePage;
