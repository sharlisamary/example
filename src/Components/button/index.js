import React from "react";
import { Button as RsButton } from "reactstrap";

function Button({ color = 'primary', onClick, text, outline = false, disabled = false }) {
    return <div>
        <RsButton
            color={color}
            outline={outline}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </RsButton>
    </div>
}
export { Button }