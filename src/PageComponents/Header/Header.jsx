import React from 'react';

import { Link } from 'react-router-dom';
import InputField from '../../components/InputField/inputfield'; 

const Header = () => {
  const Navbar = () => {
    return (
      <nav className="bg-transparent absolute top-0 left-0 p-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Video Snatcher
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/about" className="text-white"> About </Link>
            <Link to="/contact" className="text-white"> Contact </Link>
            <Link to="/profile" className="text-white">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="Profile" className="w-8 h-8 rounded-full" />
            </Link>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="relative w-[98%] mt-5 h-[80vh] bg-cover bg-center mx-auto rounded-3xl" style={{ backgroundImage: "url('/1.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Navbar />
        <h1 className="text-4xl font-bold ">Welcome to Video Snatcher</h1> 
        <p className="text-lg pt-5">Snatch your videos effortlessly</p>
        <div className="mt-10 w-full flex justify-center">
          <InputField className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Header;
