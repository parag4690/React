import '../input/input.css';

import Button from '../Button/Button';
import React , {useState} from 'react';
import './Form.css';
const Form = (props) =>{

   const [getName , setNewfetchedName]=useState('');
   const [getAge , setNewfetchedAge] = useState('');

     const nameHandler = (event) =>{
         setNewfetchedName(event.target.value);
     }
     const ageHandler = (event)=>{
         setNewfetchedAge(event.target.value);
     }
    console.log(getAge , getName , "naya naam agya h ")
   
    const submitHandler = (event)=>{
        event.preventDefault();

        const addDetail = {
            name:getName,
            age : getAge ,
            key : Math.round(Math.random()*100)
        }
        if(getName.trim().length===0 ||  getAge.length===0){
        props.setValid(true); props.setNeg(false); return;
        }
        else if(getAge<0){
            props.setNeg(true); props.setValid(false); return;
        }
        props.takeDataForm(addDetail);
        setNewfetchedAge('');
        setNewfetchedName('');
    }
    const check = props.checkvalidBox;

    const ClickHandler=()=>{
        props.setValid(false); props.setNeg(false);
        props.setValidBox(false);
    }
    return (
       <form onSubmit={submitHandler} onClick={ClickHandler} >
          <div className={`FormContainer ${check ? 'opacit' : ''}`} >
            {/*  */}
          <div className="detailFlex">
             <label className="Details">Username</label>
             <input className="EnterDetail" type="text" onChange={nameHandler} value={getName} ></input>
             <label className="Details">Age {`(Years)`}</label>
             <input className="EnterDetail" type="Number" onChange={ageHandler} value={getAge} ></input>
             
         </div>
         
             <Button type="submit" buttonValue="Add User"/>
          </div>
       </form>
    );
}

export default Form;