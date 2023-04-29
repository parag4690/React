import './MealItemForm.css'
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useRef } from 'react';
export const MealItemForm = props =>{
    const [num , setnum ]= useState(1);
    const ref = useRef(1);
    const context = useContext(GlobalContext);
    const submitHandler=(event)=>{
       event.preventDefault();
       const newItem = {
         id : Math.floor(Math.random()*100) , 
         name : props.name , 
         amount : props.amount,
         val:Number(ref.current.value)
       }

       // checking ->>>
       let flag=1;
       context.AddItem.map((item)=>{
        if(item.name===props.name){
            context.newValue(item.id);
            flag=0;
            return;
        }
       })
    
       //
    //    console.log(event.target , "just checking");
      if(flag)
       context.addItemCart(newItem);
    }
    const newValue = (event)=>{
        setnum(event.target.value);
    }
    return(
    <div> <form onSubmit={submitHandler} className='form'>
        <label className='am' htmlFor='num'>Quantity <span> </span> 
        <input ref={ref} id="num" type='number' value={num} onChange={newValue} /> </label>
        <button>+ Add</button>
    </form>
    </div>
    );
}