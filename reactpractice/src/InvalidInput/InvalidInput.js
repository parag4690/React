import React from "react";
import Button from "../Button/Button";
import './InvalidInput.css';

const InvalidInput = (props) => {
    
    props.setValidBox(true); // 

    const clickHandler = () => {
        props.setcheckValid(false);
        props.setValidBox(false); // when we click the okey inside the invalid input then it should not display
    }

    return (
        <div className="invalidState">
            <div className="upperState">{props.upper}</div>
            <div className="LowerState">{props.lower}</div>
            <Button classUi={"bottomState"} buttonValue="Okay" onClick={clickHandler} /> 
        </div>
    )
}

export default InvalidInput;
