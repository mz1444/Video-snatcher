import React from 'react';
import { FaWindows, FaApple, FaAndroid, FaLinux } from 'react-icons/fa';

const PlatformsBar = () => {
  return (
    <div className="flex items-center bg-gray-800 p-2 rounded-2xl mt-[-15px] w-1/3">
      Supported Platforms
      <div className="flex items-center ml-2  mt-2 space-x-4">
        <FaWindows className="text-white text-2xl" />
        <FaApple className="text-white text-2xl" />
        <FaAndroid className="text-white text-2xl" />
        <FaLinux className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default PlatformsBar;
