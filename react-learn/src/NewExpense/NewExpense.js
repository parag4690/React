import React , {useState}  from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) =>{
   // i want date from children i can communicate through props pass a argumant to save the data
    const saveExpenseHandler = (newExpenseData) =>{
          const expenseDataFromChildren = {
            ...newExpenseData,
          }
          // to check whether it reached successfully or not do console.log
          console.log(expenseDataFromChildren);
          props.onNewdata(expenseDataFromChildren);
    }
    return (
       <div className="new-expense">
          {/* <form></form>   splitting components*/}
         
         <ExpenseForm onSaveExpense = {saveExpenseHandler}></ExpenseForm>

       </div>
    );
};

export default NewExpense;