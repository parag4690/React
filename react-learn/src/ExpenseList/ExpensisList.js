import './ExpensisList.css'
import ExpenseItem from '../ExpenseItem'
// import React , {useState} from 'react'

const ExpenseLists = ({items}) =>{
    let newFilterArray ;
  if(items.length === 0) 
   newFilterArray = <h2 className='expenses-list__fallback'>No Expense Data</h2>
  else{
   newFilterArray = items.map(ex=>{
      return <ExpenseItem dat={ex.date} title={ex.title} amount={ex.amount}></ExpenseItem>
    })
  }

    return (
        <ul className="expenses-list">
           {newFilterArray}
        </ul>
    )
}

export default ExpenseLists