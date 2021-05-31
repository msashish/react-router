import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const Contact = () => {

    const [biodata, setBiodata] = useState([
        {id: '001', name: "unknown yet", age: 25},
        {id: '002', name: "unknown yet", age: 28},
        {id: '003', name: "unknown yet", age: 28}
    ]);

    const setNameHandler = (event) => {
        setBiodata([
            {id: '001',name: event.target.value, age: 25},
            {id: '002',name: "whoami?", age: 40},
            {id: '003',name: "unknown yet", age: 28}]);
    }

    const nameEncryptHandler = (userIndex) => {
        //const bio = biodata.slice();
        const bio = [...biodata];
        //bio.splice(userIndex, 1);
        bio[userIndex] = {id: bio[userIndex].id, name: "Encrypted", age: bio[userIndex].age}
        setBiodata(bio);
    }

    const persons = (
            biodata.map((user, index) => {
            return <UserOutput 
                    name={user.name} 
                    click={() => nameEncryptHandler(index)}
                    key={user.id}
                    />
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