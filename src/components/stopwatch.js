import { useState, useEffect } from 'react';
import Display from './display';
import Buttons from './buttons';

const Stopwatch = () => {
  let [isRunning, setIsRunning] = useState(false);
  let [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="text-center">
        <Display time={time} />
        <Buttons
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onStop={() => setIsRunning(false)}
          onReset={() => {
            setIsRunning(false);
            setTime(0);
          }}
        />
      </div>
    </div>
  );
};

export default Stopwatch;