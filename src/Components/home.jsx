import React from "react";
import backgroundImage from "../images/image4.jpg"; // Adjust path as needed
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Top Logo/Title */}
      <div className="absolute top-4 left-6 z-10 text-3xl font-extrabold text-white drop-shadow-lg">
        <span className=" px-3 py-1 rounded-md">UzaNow</span>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 ">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-md  mt-20">
          Welcome to <span className="text-white-500">UzaNow</span>
        </h1>
        <p className="mt-4 text-base md:text-lg font-black text-white drop-shadow-sm   raunded p-2">
          The ultimate platform to enhance your shopping experience.
        </p>
        <div className="mt-2">
          <Link
            to="Login"
            className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-gray-300">
        <p className="text-xs md:text-sm drop-shadow-sm">
          &copy; {new Date().getFullYear()} UzaNow. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
