import React from "react";
import './Button.css';

const Button = (props) =>{
   return (
       <button className={props.className} type={props.type} onClick={props.onClick}>{props.buttonValue}</button>
   );
}

export default Button;