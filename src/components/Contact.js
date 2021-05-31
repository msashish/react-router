import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const Contact = () => {

    const [biodata, setBiodata] = useState([
        {name: "unknown yet", age: 25},
        {name: "unknown yet", age: 28},
        {name: "unknown yet", age: 28}
    ]);

    const setNameHandler = (event) => {
        setBiodata([
            {name: event.target.value, age: 25},
            {name: "whoami?", age: 40},
            {name: "unknown yet", age: 28}]);
    }

    const nameEncryptHandler = (userIndex) => {
        //const bio = biodata.slice();
        const bio = [...biodata];
        //bio.splice(userIndex, 1);
        bio[userIndex] = {name: "Encrypted", age: 30}
        setBiodata(bio);
    }

    const persons = (
            biodata.map((user, index) => {
            return <UserOutput name={user.name} click={() => nameEncryptHandler(index)}/>
            }
            )
        );
        
        

    return (
        <div className="content-style">
            <UserInput onChange={setNameHandler} currentName={biodata[0].name}/>
            {persons}
        </div>
    )

}

export default Contact;