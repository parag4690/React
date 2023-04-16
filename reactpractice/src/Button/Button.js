import React from "react";
import './Button.css';

const Button  = (props) =>{
    return (
       <button className={`${props.classUi}`} type={props.type || 'button'} onClick={props.onClick}>{props.buttonValue}</button>
    );
}
export default Button;