import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpensesFilter from "./FilterExpense/ExpensesFilter";
import ExpenseLists from "./ExpenseList/ExpensisList";
import Expensechart from "./ExpensesChart";


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
  // console.log(filteredArray , "alsdkfjalskjdf");
  
  return (
    <div>
      <ExpensesFilter
        defaultYear={newYear}
        onClickYear={clickYear}
      ></ExpensesFilter>
      <Expensechart expenses={filteredArray}/>
      <div className="smallContainer">
         <ExpenseLists items = {filteredArray}/>
      </div>
    </div>
  );
}

export default Expense;
