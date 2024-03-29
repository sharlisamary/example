import React from "react";
import { Alert as RsAlert } from "reactstrap";

function Alert({ color = 'primary', msg }) {
    return <div>
        <RsAlert
            color={color}
        >
            {msg}
        </RsAlert>
    </div>
}
export { Alert }