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
        setTime((prevTime) => prevTime = prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <Display time={time} />
      <Buttons
        isRunning = {isRunning}
        onStart = {() => setIsRunning(true)}
        onStop = {() => setIsRunning(false)}
        onReset = {() => {
          setIsRunning(false);
          setTime(0);
        }}
      />
    </div>
  )
}

export default Stopwatch;