import { useState } from 'react';
import './App.css'
import Form from './Form/Form';
import AddnewDetail from './AddnewDetail.js';
import InvalidInput from './InvalidInput/InvalidInput';

const App = () =>{
  const [validBox , setValidBox] = useState(false); // this is used to add opacity when user has given wrong input 
  const [isValid , setValid] = useState(false);   //  check if string is empty of not
  const [checkneg , setneg] = useState(false);   // if user has given neg value
  const [objectArray , setObjectArray] = useState([]);  // object array
  
  // take data from form 
  const getDataForm = (getObjects)=>{
       setObjectArray((prev)=>{
        return [...prev , getObjects];
       })
  }

  return (
   <div className={`Main ${!validBox ? '' : 'up'}`}>
    <Form setValidBox={setValidBox}  checkvalidBox = {validBox} setNeg={setneg} setValid = {setValid} takeDataForm = {getDataForm}/>

   {/* decide what will be the output on the submition of form */}

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

    </div>
  );
}

export default App; 