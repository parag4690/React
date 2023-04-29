import React, { Fragment, useContext } from "react";
import './YourCart.css'
import AddedItems from "./AddedItems";
import { GlobalContext } from "../context/GlobalState";
export const YourCart = ()=>{
  const context = useContext(GlobalContext);
  const totalAmount = context.AddItem;
  const amount = totalAmount.reduce((acc , amt) => acc=acc+(Number(amt.amount)*Number(amt.val)) , 0);

  const clickHandler = ()=>{
    context.setvalid(false);
  }
    return (
  <div className="c">
    <div className="big_container">
      <AddedItems/>

      {/*  */}
      <div className="total">
        <div className="tot">Total Amount</div>
        <div className="totamt">${amount}</div>
      </div>
      <div className="clk">
        <button className="order">order</button>
        <button onClick={clickHandler} className="close">close</button>
      </div>
    </div>
    </div>
    );
}