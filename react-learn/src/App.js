
import './app.css'
import Expenses from './ExpenseArray.js'
function App() {
  const items = [
    {
        date : "June 10 2003" ,
        title : "Car Insurance" ,
        amount : 294.67
    } ,

    {
        date : "Jan 05 2003" , 
        title : "life Insurance" , 
        amount : 300.99
    } ,

    {
        date : "oct 02 2003" , 
        title : "Scooty Insurance" , 
        amount : 999.09
    } ,
    {
        date: "Aug 08 2003" , 
        title : "Maggi Insurance" , 
        amount : 123.45
    }

  ]
  return (
    <div className='Bigcontainer'>
      <h2>Let's get started!</h2>
      <Expenses a = {items}></Expenses>
    </div>
  );
}

export default App;