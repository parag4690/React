import './CustomMealForm.css';
import { GlobalContext } from '../context/GlobalState';
import { useContext, useState } from 'react';
const CustomMealForm = ()=>{
 const context = useContext(GlobalContext);
 const [meal , setMeal] = useState();
 const [quan , setquan] = useState();
 const mealHandler = (event) =>{
    setMeal(event.target.value);
 }
 const quanHandler = (event) =>{
    setquan(event.target.value);
 }
 const submitHandler = (event)=>{
   event.preventDefault();
   const newItem = {
    id : Math.floor(Math.random()*1000) , 
    name : meal , 
    amount : 250,
    val:Number(quan)
  }

  // checking ->>>
  let flag=1;
  context.AddItem.map((item)=>{
   if(item.name===meal){
       context.newValue(item.id);
       flag=0;
       return;
   }
  })

  //
//    console.log(event.target , "just checking");
 if(flag)
  context.addItemCart(newItem);
  context.setcustom(false);
 }

 //
 
   
 
 return (
   <div className='c'>
      <form onSubmit={submitHandler}  className='bigCon'>
         <label>Custom Meal</label>
         <input onChange={mealHandler} type='text' value={meal}></input>
         <label>Quantity</label>
         <input type='number' onChange={quanHandler} value={quan}></input>
         <div className='price'>Price : $250</div>
         <button  className='ad'>+Add</button>
      </form>
      </div>
    );
}

export default CustomMealForm;