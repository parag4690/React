import React, { useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import './YourCart.css'
const AddedItems = ()=>{
    const [addnewItem , setaddnewItem] = useState(1);

    const context = useContext(GlobalContext);
    const a = context.AddItem;
    const array = a.map((add)=>(
        
        <div className="top">
        <div className="header">
           <div className="dishname">{add.name}</div>
           <div className="quantity">
               <div className="amt">${add.amount}</div>
               <div className="quan">x
                 {add.val}
               </div>
           </div>
        </div>
        <div className="sign">
           <div onClick={()=>{ context.negValue(add.id)}} className="neg">-</div>
           <div onClick={()=>{  context.newValue(add.id) }} className="pos">+</div>
        </div>
       </div>
        )
     )


     return (
        <div>
        {array}
            </div>
     );
}

export default AddedItems;