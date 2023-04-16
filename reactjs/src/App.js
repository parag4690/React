import CourceForm from "./CourceForm/CourceForm";
import './App.css'
import React , {useState} from "react";
import TaskItems from "./TaskItems";
const App = () =>{
  const DummyArray=["Do All Exercise"];
  const [newArray , setnewArray] = useState(DummyArray);
  // check input's validity
  const [isValid , setValid] = useState(true);
  const getData = (fetchedData)=>{
     if(fetchedData.trim().length ===0 ){
        setValid(false); return;
     }
     else setValid(true);
      setnewArray((prevArray)=>{
        return [fetchedData , ...prevArray];
      })
  }

  return (
   <div className="page">
       <div className="UserForm">
           <CourceForm getDataform = {getData} checkValid={isValid}/>
       </div>
       <TaskItems check={newArray}/>
    </div>
  );
}

export default App;