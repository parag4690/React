import './app.css'
import ExpenseItem from './components/Expense';

function Expenses(props){
    console.log(props.a[0].date);
    return (
        <div className='Bigcontainer'>
           
            
    <ExpenseItem dat = {props.a[0].date} title={props.a[0].title} amount = {props.a[0].amount}></ExpenseItem>
    <ExpenseItem dat = {props.a[1].date} title={props.a[1].title} amount = {props.a[1].amount}></ExpenseItem>
    <ExpenseItem dat = {props.a[2].date} title={props.a[2].title} amount = {props.a[2].amount}></ExpenseItem>
    <ExpenseItem dat = {props.a[3].date} title={props.a[3].title} amount = {props.a[3].amount}></ExpenseItem>
     </div>
    )
}

export default Expenses;