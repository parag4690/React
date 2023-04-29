import React from "react";
import Title from "../Title/Title";
import { useState , useEffect , useContext} from "react";
import './History.css';
import NoteContext from "../context/NoteContext";
import Button from "../Button/Button";
const History = (props)=>{
    const a = useContext(NoteContext)
    let sumIncome=0 , sumExpense=0;
const store = a.histArray.map((ele)=>{
    if(ele.sign===1){
        sumIncome+=ele.money;
        return <div className="pos"><div>{ele.title}</div> <div>  +{ele.money} </div></div>
    }
    else{
        sumExpense+=ele.money; 
        return <div className="neg"><div>{ele.title}</div> <div> {-1*ele.money} </div></div>}
})
a.incomeHandler(sumIncome);
a.expenseHandler(sumExpense);
a.totalHandler(sumIncome-sumExpense);
const reset = ()=>{
    a.clearHandler([]);
}
   return (
      <div className="history">
        <div className="clear">
        <Title check={1} value="History"/>
        <Button onClick={reset}  className={"clearAll"} buttonValue={"Clear All"}/>
        </div>
        <div className="store">
           {store}
        </div>
      </div>
   );
}

export default History;