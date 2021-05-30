import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const Contact = () => {

    const [name, setName] = useState("unknown yet");

    const setNameHandler = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="content-style">
            <UserInput onChange={setNameHandler} currentName={name}/>
            <UserOutput name={name}/>
            <UserOutput name="WhoamI?"/>
        </div>
    )

}

export default Contact;