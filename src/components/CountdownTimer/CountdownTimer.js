import React from 'react'
import { useState, useEffect } from 'react';
import "../CountdownTimer/CountdownTimer.css"
import {getRemainingTimeUntilMSTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({CountdownTimestampMs}) => {
     const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(CountdownTimestampMs);

        }, 1000);
        return () => clearInterval(intervalId);

    },[CountdownTimestampMs]);


     function updateRemainingTime(countdown) {
       setRemainingTime(getRemainingTimeUntilMSTimestamp(countdown));
     }

    return(
        <div className= "CountdownTimer">
            <div className= "countdown-timer">
                <span>{remainingTime.days}</span>
                <span>days</span>
                <span className="two-numbers">{remainingTime.hours}</span>
                <span>hours</span>
                <span className="two-numbers">{remainingTime.minutes}</span>
                <span>minutes</span>
                <span className="two-numbers">{remainingTime.seconds}</span>
                <span>seconds</span>
            </div>
        </div>
        
    );
}

export default CountdownTimer;