import React from "react";
const ProgressBar = () => {

    const containerStyles = {
        height: 20,
        width: '95%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
        display: 'flex'
    }

    const fillerStyles = {
        height: '100%',
        backgroundColor: 'blue',
        borderRadius: 'inherit',
        textAlign: 'center',
        transition: 'width 1s ease-in-out',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

    return (
        <div >
            <h1 style={{ textAlign: 'center' }}>ProgressBar</h1>
            <br></br>
            <br></br>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles} >
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;