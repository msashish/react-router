import React, { useState } from "react";
import ValidationComponent from './ListAssigns/ValidationComponent';
import CharComponent from "./ListAssigns/CharComponent";

const ListAssignment = () => {
    const [textObj, setText] = useState({text: [], len: 0});

    const textEnteredHandler = (event) => {
        const textArray = event.target.value.split(''); 
        setText({text: textArray, len: textArray.length})
    };

    const onClickHandler = (index) => {
        const temp = [...textObj.text];
        temp.splice(index, 1);
        setText({text: temp, len: temp.length});
    };

    const charList = textObj.text.map((element, index) => {
            return <CharComponent letter={element} click={() => onClickHandler(index)} key={index}/>;
        });

    const style =  {
        textAlign: 'center'
      };

    return (
        <div style={style}>
            <p> Enter some text below </p>
            <hr/>
            <input
                className="form-control"
                type="text"
                value={textObj.text.join('')}
                onChange={textEnteredHandler}
            />
            <ValidationComponent textLen={textObj.len}/>
            {charList}
        </div>
    )

}

export default ListAssignment;