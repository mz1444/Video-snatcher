import React, { useState } from 'react';
import Button from '../Button/button'; 
import Loader from '../loader/loader';
import PlatformsBar from '../platforms/platforms';

const InputField = () => {
  const [loading, setLoading] = useState(false);

  const handleSearchClick = () => {
    setLoading(true);
    console.log("Clicked!");
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className="relative w-1/2">
          <input 
            rows="2" 
            className="border- border-gray-300 rounded-full p-2 pl-10 pr-20 w-full" 
            placeholder="Enter kjsdabjbdfou text here" 
          ></input>
          <Button label="Search" className="absolute rounded-full right-4 top-1/2 transform -translate-y-1/2 px-6" onClick={handleSearchClick} />
          
        </div>
<PlatformsBar />
        <div className="mt-4">
          {loading && <Loader/>}
        </div>
        
    </div>
  );
};

export default InputField;
