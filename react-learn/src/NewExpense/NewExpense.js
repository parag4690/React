import React , {useState}  from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) =>{
   // i want date from children i can communicate through props pass a argumant to save the data
    const saveExpenseHandler = (newExpenseData) =>{
          const expenseDataFromChildren = {
            ...newExpenseData,
          }
          props.onNewdata(expenseDataFromChildren);
    }
    const [isEditing , setEditing]= useState(false);
    
    const EditingHandler = ()=>{
      setEditing(true);
    }

    const stopEditing = () =>{
      setEditing(false);
    }
    return (
       <div className="new-expense">
          { !isEditing && <button onClick={EditingHandler}>Add new Expense</button>}
        { isEditing && <ExpenseForm onSaveExpense = {saveExpenseHandler} onStopClick={stopEditing}></ExpenseForm>}

       </div>
    );
};

export default NewExpense;