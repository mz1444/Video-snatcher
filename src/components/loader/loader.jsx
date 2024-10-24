import React from 'react';

const Loader = () => {
  return (
    <div className="loader" style={{ background: 'none' }}>
      <img src="/831.gif" alt="Loading..." className="spinner" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default Loader;
