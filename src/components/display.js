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
    <span>{convertSecondsToHHMMSS(props.time)}</span>
  );
}

export default Display;