import './ExpenseForm.css'

const ChangeExp = ({abc}) =>{
   
  
    const [titleChange , setTitleChange] = useState('');

    const titleChangeHandler = (event)=>{

        setTitleChange(event.target.value);
        abc(titleChange);


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

    return (
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label >Title</label>
          <input type="text" onChange={titleChangeHandler} value={titleChange} />
        </div>
        {/*  */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange = {amountChangeHandler} value={amountChange} />
        </div>
        {/*  */}
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-10-12" max="2023-10-06" onChange={dateChangeHandler} value={dateChange}/>
        </div>
     </div> 
    );
}
export default ChangeExp;