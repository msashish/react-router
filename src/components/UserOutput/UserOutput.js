import React from "react";
import './UserOutput.css';

const UserOutput = (props) => {

    return (
        <div className="UserOutput" onClick={props.click}>
            <p> My Name is {props.name}</p>
        </div>

    )

}

export default UserOutput;