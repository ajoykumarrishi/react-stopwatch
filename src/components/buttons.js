// Buttons.js
import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ isRunning, onStart, onStop, onReset }) => {
  const buttonStyle = {
    backgroundColor: '#323437',
    color: '#e2b714',
    border: 'none',
    padding: '10px 20px',
    margin: '0 5px',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const disabledStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: 'not-allowed'
  };

  const handleHover = (e, isEnabled, hoverColor) => {
    if (isEnabled) {
      e.target.style.backgroundColor = hoverColor;
      e.target.style.color = '#ffffff';
    }
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = '#323437';
    e.target.style.color = '#e2b714';
  };

  return (
    <div>
      <button 
        style={isRunning ? disabledStyle : buttonStyle} 
        onClick={onStart}
        disabled={isRunning}
        onMouseEnter={(e) => handleHover(e, !isRunning, '#2ecc40')}
        onMouseLeave={handleLeave}
      >
        Start
      </button>
      <button 
        style={!isRunning ? disabledStyle : buttonStyle} 
        onClick={onStop}
        disabled={!isRunning}
        onMouseEnter={(e) => handleHover(e, isRunning, '#ff4136')}
        onMouseLeave={handleLeave}
      >
        Stop
      </button>
      <button 
        style={buttonStyle} 
        onClick={onReset}
      >
        Reset
      </button>
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