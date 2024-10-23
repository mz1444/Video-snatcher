import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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

  return <div>
    <div className="relative w-[100%]  h-[80vh] bg-cover bg-center mx-auto " style={{ backgroundImage: "url('/about.svg')" }}>
      <div className="absolute inset-0 bg-black opacity-10  rounded-3xl"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Navbar />
      </div>
      <div className="flex items-center">
        <img src="/youpic.png" alt="You Pic" className="w-1/3 h-auto ml-32 mt-16 bg-transparent" />
       <div className="text-center ml-10 mt-20">
         <span className="text-3xl font-bold block ml-8">Ensured Compatibility with all your devices</span>
         <span className="ml-4 font-2xl mt-6 block ">Video Snatcher is a fast and reliable tool for downloading YouTube videos with ease.</span>
         <span className="ml-4 font-2xl block ">Save videos or convert them to audio in just a few clicks, anytime, anywhere.</span>
       </div>
      </div>
    </div>
  </div>;
};

export default About; 