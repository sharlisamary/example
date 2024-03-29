import React from "react";
import { Navbar as RsNavbar } from "reactstrap";

function Navbar({ color = 'primary', onClick, text, outline = false, disabled = false }) {
    return <div>
        <RsNavbar
            color={color}
            outline={outline}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </RsNavbar>
    </div>
}
export { Navbar }