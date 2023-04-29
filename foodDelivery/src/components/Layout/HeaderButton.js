import React, { useCallback, useContext, useState } from "react";
import CartIcon from "./cartIcon";
import classes from './HeaderButton.module.css'
import { GlobalContext } from "../context/GlobalState";
const HeaderButton = ()=>{
   // const [valid , setValid] = useState(false);
   const context = useContext(GlobalContext);

   const validHandler = () =>{
       context.setvalid(true);
   }
   const values = context.AddItem.map((item)=> item.val );
   const totval = values.reduce((acc , val)=> acc=acc+Number(val) , 0);
   console.log(totval);
   return(  
      <div>
       <button onClick={validHandler}  className={classes.button}>
       <span className={classes.icon}><CartIcon/></span> 
       <span>Your Cart</span>
       <span className={classes.badge}>
        {totval}
       </span>
       <span></span>
    </button>
    {/* {
     valid && <YourCart/>
    } */}
    </div>
   );
}

export default HeaderButton;