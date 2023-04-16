import React from "react";
import Button from "../Button/Button";
import './InvalidInput.css';

const InvalidInput = (props) => {
    
    
    props.setValidBox(true);

    const clickHandler = () => {
        // Handle click event here
        console.log("Button clicked!"); // Example action
        props.setcheckValid(false);
        // after click gets normal
        props.setValidBox(false);
    }

    return (
        <div className="invalidState">
            <div className="upperState">{props.upper}</div>
            <div className="LowerState">{props.lower}</div>
            {/* <button  className= "bottomState" buttonValue="Okay"  onClick={clickHandler}>Okay</button> */}
            <Button classUi={"bottomState"} buttonValue="Okay" onClick={clickHandler} /> 
           {/*   check why it not working -> u have to send it as props */}
        </div>
    )
}

export default InvalidInput;
