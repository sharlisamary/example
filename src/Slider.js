import React from 'react';
import { useState } from 'react';
function App() {
    const [value, onChange] = useState(0);
    return (
        <div className='slider m-5 p-5 ' >
            <div className="slider-parent " >
                <h1 className='header d-flex justify-content-center'>SLIDER</h1>
                <input className='slider-tick-marks' type='range' min="0" max="100" value={value}
                    step="10" aria-label="Discrete slider with tick marks demo"
                    onChange={({ target: { value: radius } }) => { onChange(radius); }}
                    style={{ height: '100%', width: '100%' }}
                />

                <div className="buble">
                    {value}
                </div>
            </div>
        </div>
    );
}
export default App;



// Css code . app.css

// .app {
//     font - family: sans - serif;
//     text - align: center;

// }

// .slider - parent {
//     position: relative;
// }

// .buble {
//     position: absolute;
//     display: flex;
//     align - items: center;
//     justify - content: center;
// }