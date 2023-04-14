import React , {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = () =>{
    
    const [titleChange , setTitleChange] = useState('');

    const titleChangeHandler = (event)=>{

        setTitleChange(event.target.value);

    } 

    // amount

    const [amountChange , setAmountChange] = useState('');
    const amountChangeHandler = (event) =>{
        setAmountChange(event.target.value);
    }

    // set date

    const [dateChange , setDateChange] = useState('');
    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
    }
    
    // submit envoke button in form // but it will referesh the page but we save this

    const submitHandler = (event) =>{
       event.preventDefault(); //

       // now update in form 

       const expenseDate = { // this object added inside form submition
            title : titleChange , 
            amount : amountChange , 
            date : new Date(dateChange)
       }
       console.log(expenseDate);
       // now when form is submit i want to things to clear -> two way binding
       setTitleChange('');
       setAmountChange('');
       setDateChange('');

    }

     return (
        <form onSubmit={submitHandler}>
            {/* include -> title , date , amount */}
            <div className="new-expense__controls">
               <div className="new-expense__control">
                 <label >Title</label>
                 <input type="text" onChange={titleChangeHandler} value={titleChange} />
               </div>
               {/*  */}
               <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number" min="0.01" steps="0.01" onChange = {amountChangeHandler} value={amountChange} />
               </div>
               {/*  */}
               <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date" min="2020-10-12" max="2023-10-06" onChange={dateChangeHandler} value={dateChange}/>
               </div>
            </div> 

            {/* button */}
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
     );
}

export default ExpenseForm;