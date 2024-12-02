import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBox, FaUsers, FaArrowUp } from "react-icons/fa";
import { MdExitToApp, MdNotifications, MdDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const ProductPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const products = [
    { id: 1, sellerId: 4, name: "Product 1", category: "Category A", price: "$10", quantity: 100,email:"bidaus@gmail.com" ,phone: "0621690364",date: "12/10/2004"},
    { id: 2,sellerId: 6, name: "Product 2", category: "Category B", price: "$20", quantity: 50,email:"bidaus@gmail.com" ,phone: "0621690364",date: "12/10/2004" },
    { id: 3,sellerId: 40, name: "Product 3", category: "Category A", price: "$15", quantity: 75 ,email:"bidaus@gmail.com" ,phone: "0621690364",date: "12/10/2004"},
    { id: 4,sellerId: 20, name: "Product 4", category: "Category C", price: "$25", quantity: 30 ,email:"bidaus@gmail.com" ,phone: "0621690364",date: "12/10/2004" },
  ];

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
            to="/dashboard"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white text-white transition duration-200 flex items-center"
          >
            <MdDashboard className="mr-2" size={20} />
            Dashboard
          </Link>
          <Link
            to="/orders"
            className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition text-white duration-200 flex items-center"
          >
            <FaBox size={20} color="white" className="mr-2" />
            Orders
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
        <header className="bg-blue-500 shadow flex justify-between items-center px-4 py-4">
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
          <div className="flex items-center space-x-4">
            <MdNotifications size={24} className="text-white md:hidden cursor-pointer" />
            <FaUserCircle size={24} className="text-white md:hidden cursor-pointer" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <MdNotifications size={24} className="text-white cursor-pointer" />
            <FaUserCircle size={24} className="text-white cursor-pointer" />
          </div>
        </header>

        <div className="p-4">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Seller Id</th>                  
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Phone</th> 
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Approve</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">{product.id}</td>
                    <td className="py-2 px-4">{product.sellerId}</td>
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.category}</td>
                    <td className="py-2 px-4">{product.price}</td>
                    <td className="py-2 px-4">{product.quantity}</td>
                    <td className="py-2 px-4">{product.email}</td>
                    <td className="py-2 px-4">{product.phone}</td>
                    <td className="py-2 px-4">{product.date}</td>
                    <td className="py-2 px-4"><button type="button" className="bg-yellow-700 text-white font-black px-2 py-2 rounded">Approved</button></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
      >
        <FaArrowUp size={24} />
      </button>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default ProductPage;
