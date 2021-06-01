import React, { useState } from "react";
import Steps from './Steps/Steps';
import './Steps/Steps.css';

const ListSteps = () => {
    const [step, setStep] = useState("");

    const stepChangeHandler = (event) => {
        setStep(event.target.value)
    }
    const style =  {
        textAlign: 'center'
      };

    return (
        <div style={style}>
            <p> Enter a step number between 0 and 9 </p>
            <input
                className="form-control"
                type="input"
                value={step}
                onChange={stepChangeHandler}
            />
            <hr/>
            <Steps len={step} />
        </div>
    )

}

export default ListSteps;