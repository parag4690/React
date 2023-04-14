import Expense from "./Expense";
import NewExpense from "./NewExpense/NewExpense";
import './app.css'

    function App() {
        const items = [
          {
              date : new Date(2020 ,  5 , 9)  ,
              title : "Car Insurance" ,
              amount : 294.67
          } ,
      
          {
              date : new Date(2003 , 6 , 10) , 
              title : "life Insurance" , 
              amount : 300.99
          } ,
      
          {
              date : new Date(2006 , 11 , 21) , 
              title : "Scooty Insurance" , 
              amount : 999.09
          } ,
          {
              date: new Date(2012 , 10 , 12) , 
              title : "Maggi Insurance" , 
              amount : 123.45
          }
      
        ]
        return (
          <div className="page" >
            {/* <h2>Let's get started!</h2> */}
            <NewExpense/>
            <div className="Bigcontainer">
                <Expense a = {items}></Expense>
            </div>
          </div>
        );
}

export default App;