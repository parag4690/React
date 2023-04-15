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
  
  return (
    <div>
      <ExpensesFilter
        defaultYear={newYear}
        onClickYear={clickYear}
      ></ExpensesFilter>
      <div className="smallContainer">
        {
          filteredArray.map((ex)=>{
               return <ExpenseItem dat ={ex.date} title={ex.title} amount={ex.amount} />
          
          })
        }       
        
      </div>
    </div>
  );
}

export default Expense;
