import React from "react";
import './UserOutput.css';

const UserOutput = (props) => {

    return (
        <div className="UserOutput">
            <p> My Name is {props.name}</p>
            <p></p>
        </div>

    )

}

export default UserOutput;