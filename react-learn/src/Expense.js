import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
import ExpensesFilter from "./FilterExpense/ExpensesFilter";

function Expense(props) {
  const [newYear, setnewYear] = useState("2020");
  const clickYear = (getClickedYear) => {
    setnewYear(getClickedYear);
    console.log(getClickedYear, "agaya expensese me ");
  };

  //
  const filteredArray = props.a.filter((ex)=>{
    return ex.date.getFullYear().toString() === newYear ;
  })
  // coditional statements --->>>>

  let newFilterArray ;
  if(filteredArray.length === 0) 
   newFilterArray = <p>No Expense Data</p>
  else{
   newFilterArray = filteredArray.map(ex=>{
      console.log("alkdsjf");
      return <ExpenseItem dat={ex.date} title={ex.title} amount={ex.amount}></ExpenseItem>
    })
  }

  return (
    <div>
      <ExpensesFilter
        defaultYear={newYear}
        onClickYear={clickYear}
      ></ExpensesFilter>
      <div className="smallContainer">
        {/* first method to do this-> use ternary instead of if else because of curly bractes  */}
        {/* {
          filteredArray.length === 0 ? <p>No Expense Found</p> : (
            filteredArray.map((ex)=>{
             return <ExpenseItem dat={ex.date} title={ex.title} amount={ex.amount}></ExpenseItem>
            })
          )
        } */}

        {/* 2nd method use abuse js -> when we && it return the  */}
        {/* {filteredArray.length === 0 && <p>No Expense Found</p>}
        {filteredArray.length > 0 && 
          filteredArray.map(ex=>{
            return <ExpenseItem dat={ex.date} title={ex.title} amount={ex.amount}></ExpenseItem>
          })
        } */}

        {/* best way to do it */}
        {newFilterArray}
        
      </div>
    </div>
  );
}

export default Expense;
