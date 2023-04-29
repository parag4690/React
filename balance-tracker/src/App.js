import React  from "react";
import {TransactionForm} from "./components/TransactionForm/TransactionForm"; // we have two ways to do it
import History from "./components/History/History";
import './App.css';
import { useState } from "react";
import NoteContext from "./components/context/NoteContext";
import YourBalance from "./components/YourBalance/YourBalance";

const App = ()=>{

 return (
  <div className="main">
    <h1>Expense Tracker</h1>
   <YourBalance/>
   <History/>
   <TransactionForm ></TransactionForm>
   </div>
 );
}

export default App;