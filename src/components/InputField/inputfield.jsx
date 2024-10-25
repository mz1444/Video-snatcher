import React, { useState } from 'react';
import Button from '../Button/button'; 
import Loader from '../loader/loader';
import PlatformsBar from '../platforms/platforms';

const InputField = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [resolution, setResolution] = useState('720'); // Default resolution set to 720p
  const [error, setError] = useState('');

  const isValidUrl = (url) => {
    let parsedUrl;

    // Attempt to parse the URL with or without the protocol
    try {
      parsedUrl = new URL(url);
    } catch (e) {
      // If it fails, try prepending 'http://' to the URL
      try {
        parsedUrl = new URL('http://' + url);
      } catch (e) {
        return false; // If it still fails, the URL is not valid
      }
    }

    // Perform additional checks on the hostname
    if (!parsedUrl.hostname.includes('.')) {
      return false;
    }

    if (!/^[a-zA-Z0-9.-]+$/.test(parsedUrl.hostname)) {
      return false;
    }

    return true;
  };

  const handleSearchClick = async () => {
    if (!isValidUrl(url)) {
      setError('Invalid URL');
      setLoading(false);
      return;
    }
    setError('');
    setLoading(true);
    console.log("Clicked!");
    
    const backendUrl = process.env.BACKEND_URL + "/api/download";

    const formData = new FormData();
    formData.append("url", url);
    formData.append("resolution", resolution);

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        body: formData
      });
      if (!response.ok) throw new Error('Failed to download video');
      // Handle file download here
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className="relative w-1/2">
          <input 
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border-4 border-gray-300 rounded-full p-2 pl-10 pr-20 h-14 w-full text-black focus:outline-none" 
            placeholder="Enter video URL here" 
          />
          <Button label="Search" className="absolute rounded-full right-4 top-1/2 transform -translate-y-1/2 px-6" onClick={handleSearchClick} />
        </div>
        <PlatformsBar />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="mt-4">
          {loading && <Loader/>}
        </div>
    </div>
  );
};

export default InputField;
