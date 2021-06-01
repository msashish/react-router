import React from "react";

const Steps = (props) => {

    var statuses = [];
    for (var i = 0; i < 10; i++) {
            if (i < props.len) statuses.push(<li>&#10003;</li>);
            if (i === props.len) statuses.push(<li class="active">&#10003;</li>);
            if (i > props.len) statuses.push(<li>{i}</li>);    
        };

    return (
        <div>
        {statuses}
        </div>
    )

};

export default Steps;