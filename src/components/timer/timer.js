import React, { useState, useEffect } from 'react';
import './timer.css';
 
const Timer = () => {
    
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    const deadline = "December, 09, 2022";
    
    const getTime = () => {
        const timeLeft = Date.parse(deadline) - Date.now();
        
        setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
        setSeconds(Math.floor((timeLeft / 1000) % 60));
    }
    
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='timer-container'>
        
    <div className="timer-wrapper">
        <div className='timebox border-left border-right'>
            <span className='value'>{days}</span>
            <span className='label'>Días</span>
        </div>
        <div className='timebox border-right'>
            <span className='value'>{hours}</span>
            <span className='label'>Horas</span>
        </div>
        <div className='timebox border-right'>
            <span className='value'>{minutes}</span>
            <span className='label'>Minutos</span>
        </div>
        <div className='timebox border-right'>
            <span className='value'>{seconds}</span>
            <span className='label'>Segundos</span>
        </div>
        
    </div>
        <p>Para la aventura de la Bubi</p>
    </div>
  );
};

export default Timer;