import React from "react";
import './Summary.css'
const Summary = (props)=>{
   return (
<div className={`col ${props.ex ? 'ex' : ''}`}>
    <div className="income">{props.head}</div>
    <div className={`incomeAmt ${props.ex ? 'ex' : ''}`}>{props.total}</div>
</div>
   );
}
export default Summary;