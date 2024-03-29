import React from "react";
import { Input as RsInput } from "reactstrap";

function Input({ color = 'light', onchange, text, disabled = false, size }) {
    return <div>
        <RsInput
            color={color}
            // outline={outline}
            onChange={onchange}
            disabled={disabled}
            sixe={25}
        >
            {text}
        </RsInput>
    </div>
}
export { Input }