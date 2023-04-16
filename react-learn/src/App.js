import Expense from "./Expense";
import NewExpense from "./NewExpense/NewExpense";
import './app.css'
import React , {useState} from "react";
const DUMMY_EXPENSES = [
  {
      date : new Date(2020 , 11 , 12)  ,
      title : "Car Insurance" ,
      amount : 450.80
  } ,

  {
      date : new Date(2020 , 6 , 10) , 
      title : "life Insurance" , 
      amount : 300.99
  } ,

  {
      date : new Date(2022 , 11 , 21) , 
      title : "Scooty Insurance" , 
      amount : 999.09
  } ,
  {
      date: new Date(2012 , 10 , 12) , 
      title : "Maggi Insurance" , 
      amount : 123.45
  }

];
    function App() {
        // const [newDate , setnewDate] = useState(new Date(2020 ,  5 , 9));
        // const [newTitle , setnewTitle] = useState('Titles');
        // const [newAmount , setnewAmount] = useState('0.00');
    // better version

    const [newExpenses , setnewExpenses] = useState(DUMMY_EXPENSES);


       

        const newItemsValue = (expenseDataWithNewValue)=>{
              // console.log(expenseDataWithNewValue);
              console.log("checking what is here , " , expenseDataWithNewValue)
              setnewExpenses((prevExpenses)=>{
                return [expenseDataWithNewValue , ...prevExpenses];
              })
        }
        console.log(newExpenses , newExpenses[0].title);

        return (
          <div className="page" > 
            {/* {    console.log(newItemsValue.length , "length of objects here we can say " , newItemsValue())   } */}

            <NewExpense onNewdata={newItemsValue}></NewExpense> 
           
            <div className="Bigcontainer">
                <Expense a = {newExpenses}></Expense>
            </div>
          </div>
        );
}

export default App;