import React from "react";

const UserInput = (props) => {

    // Inline styling in JS method
    const style = {
        border: '2px solid red'
    };

    return (
    <div>
        <form>
            <label htmlFor="UserName">User Name </label>
            <input
                className="form-control"
                type="input"
                value={props.currentName}
                onChange={props.onChange}
                style={style}
            />
        </form>
    </div>
    );
}

export default UserInput;