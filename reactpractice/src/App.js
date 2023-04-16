import { useState } from 'react';
import './App.css'
import Form from './Form/Form';
import AddnewDetail from './AddnewDetail.js';
import InvalidInput from './InvalidInput/InvalidInput';
const App = () =>{
  const [validBox , setValidBox] = useState(false);
  const [isValid , setValid] = useState(false);
  // const [validBox2 , setValidBox2] = useState(false);
  const [checkneg , setneg] = useState(false);
  const [objectArray , setObjectArray] = useState([]);
  
  // take data from form 
  const getDataForm = (getObjects)=>{
       setObjectArray((prev)=>{
        return [...prev , getObjects];
       })
  }
  // take value from form
  // const [inputValue , setInputValue] = useState('');

  // console.log("this is new input Value = > " , inputValue);
  
  // console.log(objectArray);
  // if(isValid) setValidBox(true);
   console.log("check kr rha hu "  ,validBox);
  return (
   <div className={`Main ${!validBox ? '' : 'up'}`}>
    <Form setValidBox={setValidBox}  checkvalidBox = {validBox} setNeg={setneg} setValid = {setValid} takeDataForm = {getDataForm}/>
  {/* {
    // checkneg &&  <InvalidInput setcheckValid={setneg} upper={"Invalid Input"} 
    // lower={"Please enter a valid age (> 0)."}/>
    checkneg && isValid ? ( setValid(false) && <InvalidInput setcheckValid={setneg} upper={"Invalid Input"} 
    lower={"Please enter a valid age (> 0)."}/> ) :  checkneg ? (<InvalidInput setcheckValid={setneg} upper={"Invalid Input"} 
    lower={"Please enter a valid age (> 0)."}/> 

    ): isValid ? (   
      <InvalidInput clickBox={setValidBox} setcheckValid={setValid} upper={"Invalid Input"} lower={"Please enter a valid name and age (non-empty values)."}/>
    ) :  <div>
    <AddnewDetail sendObjectArray = {objectArray} /> 
</div>
  } */}

  

  
   { !isValid && !checkneg &&
     <div>

        <AddnewDetail  sendObjectArray = {objectArray} /> 
    </div>
  } 
  { isValid && 
        <InvalidInput setValidBox = {setValidBox} setcheckValid={setValid} upper={"Invalid Input"} lower={"Please enter a valid name and age (non-empty values)."}/>
  } 
  {
    checkneg && <InvalidInput setValidBox = {setValidBox} setcheckValid={setneg} upper={"Invalid Input"} 
    lower={"Please enter a valid age (> 0)."}/> 
  }


  {/*  */}
    </div>
  );
}

export default App; 