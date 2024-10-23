import React from 'react';

const Card = ({ icon, title, description }) => (


  <div className="flex flex-col items-center p-14 rounded-lg shadow-md">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);



const Cards = () => {
  const cardData = [
    {
      icon: '⚡',
      title: 'High Quality',
      description: 'You can download all the videos in the YouTube library without losing quality and in a short time. All videos can be downloaded in MP4 and even MP3 formats.',
    },
    {
      icon: '⏱️',
      title: 'Fast Downloading',
      description: 'Using Video Snatcher, quickly download your desired videos from YouTube with just a few simple clicks without wasting any time or paying extra fees.',
    },
    {
      icon: '∞',
      title: 'Unlimited Download',
      description: 'Through the platform, you can download the videos you want at any time and without limiting the number of downloads. Transfer speed up to 1GB/s.',
    },
    {
      icon: '📱',
      title: 'Support All Devices',
      description: 'Video Snatcher is a website-based and online platform that you can use on any operating system, including Windows, Linux, iPhone, and Android.',
    },
  ];

  return (
    <div className="flex justify-around">
      {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Cards;

