import React from 'react';

const Display = (props) => {
  const convertSecondsToHHMMSS = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map(val => val.toString().padStart(2, '0'))
      .join(':');
  };

  return (
    <div className="mb-4 text-light" style={{fontSize: '4rem', fontWeight: 200, fontFamily: 'monospace'}}>
      {convertSecondsToHHMMSS(props.time)}
    </div>
  );
};

export default Display;