import React from 'react';
import PropTypes from 'prop-types'; 

const Buttons = ({ isRunning, onStart, onStop, onReset }) => {

  return (
    <div>
      {isRunning ? (
        <button onClick={onStop}>Stop</button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

Buttons.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Buttons;
