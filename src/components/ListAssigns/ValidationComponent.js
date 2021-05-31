import React from "react";

const ValidationComponent = (props) => {
    return (
        <div className="Validation" >
            {props.textLen < 5 ?  
            <p> Nooo !! Text too short</p>
            :
            <p> Yesss !! Text long enough </p>  
            } 
        </div>
    )
};

export default ValidationComponent;