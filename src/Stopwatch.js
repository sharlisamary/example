import React, { useState, useEffect } from "react";
const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliSeconds, setMilliSeconds] = useState(0);
    useEffect(() => {

        if (isRunning) {
            const interval = setTimeout(() => {
                setMilliSeconds((milliSeconds) => (milliSeconds + 1));
                if (milliSeconds === 99) {
                    setSeconds((seconds) => (seconds + 1))
                    setMilliSeconds(0)
                }
                if (seconds === 59) {
                    setMinutes((minutes) => (minutes + 1))
                    setMilliSeconds(0)
                    setSeconds(0)
                }
                if (minutes === 59) {
                    setHours((hours) => (hours + 1))
                    setMilliSeconds(0)
                    setSeconds(0)
                    setMinutes(0)
                }
            }, 10);
            return () => {
                clearInterval(interval);
            }
        }

    }, [isRunning, hours, minutes, seconds, milliSeconds]);

    const start = () => {
        setIsRunning(true);
    }

    const pause = () => {
        setIsRunning(false);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        setMilliSeconds(milliSeconds)
    }

    const reset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliSeconds(0);
        setIsRunning(false)
    }

    return (
        <div className="stopwatch-container p-5 m-5  ">
            <h1 className="stopwatch-timer  d-flex align-items-center justify-content-center ">
                {(hours < 10 ? '0' + hours : hours)}:{(minutes < 10 ? '0' + minutes : minutes)}:
                {(seconds < 10 ? '0' + seconds : seconds)}:{(milliSeconds < 10 ? '0' + milliSeconds : milliSeconds)}
            </h1>
            <div className="col">
                <div className="stopwatch-buttons d-flex justify-content-center " >
                    <button className="bg-success border-success btn-lg mr-5" onClick={start} >Start</button>
                    <button className="bg-info border-info btn-lg  mr-5" onClick={pause}>pause</button>
                    <button className="bg-danger border-danger btn-lg " onClick={reset}>Reset</button>
                </div>
            </div>
        </div>

    );
};
export default Stopwatch;