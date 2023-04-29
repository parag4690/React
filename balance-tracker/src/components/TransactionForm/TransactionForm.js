import React, { useState , useContext } from "react";
import './TransactionForm.css'
import Button from "../Button/Button";
import Title from "../Title/Title";
import NoteContext from "../context/NoteContext";


export const TransactionForm = (props)=>{
    const [newTitle , setnewTitle]=useState("");
    const [newAmount , setnewAmount] = useState("");

    const titleHandler =  (event)=>{
        setnewTitle(event.target.value);
    }

    const amountHandler = (event)=>{
        setnewAmount(event.target.value);
    }

    const check=useContext(NoteContext);
    const submitHandler=(event)=>{
        event.preventDefault();
        let flag=1;
        let a = parseInt(newAmount);
        if(a<0) flag=0;
        a=Math.abs(a);
        console.log(a);
        const addDetail = {
            title : newTitle ,
            money : a,
            sign : flag
        }
        setnewAmount("");
        setnewTitle("");
        check.historyHandler(addDetail);
     
    }
    const checkHand = (event)=>{
       console.log(event.target);
    }
    return (
    <div>
       <form onSubmit={submitHandler} className="formDetail">
           <Title value={"Add new transaction"}/>
           
           <label onClick={checkHand} htmlFor="text">Text</label> 
           {/* htmlfor is used to link this label to input whenever */}
           <input id="text" onChange={titleHandler} className="input" type="text" value={newTitle} placeholder="Enter text..."  />
           
           <label htmlFor="amount">Amount 
                <br/>
                {`(negative-expense , positive-income)`}
           </label>
           <input onChange={amountHandler} className="input" type="number" value={newAmount} placeholder="Enter amount..."/>
           <Button type="submit" buttonValue="Add transaction"></Button>
       </form>

    </div>
    );
}

// export default TransactionForm ;