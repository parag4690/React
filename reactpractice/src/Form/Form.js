// import '../input/input.css';

// import Button from '../Button/Button';
// import React , {useState} from 'react';
// import './Form.css';

// const Form = (props) =>{

//     // ref -> we can select the whole element ( div )


//    const [getName , setNewfetchedName]=useState('');
//    const [getAge , setNewfetchedAge] = useState('');

//      const nameHandler = (event) =>{
//          setNewfetchedName(event.target.value);
//      }
//      const ageHandler = (event)=>{
//          setNewfetchedAge(event.target.value);
//      }
//     console.log(getAge , getName , "naya naam agya h ")
   
//     const submitHandler = (event)=>{
//         event.preventDefault();

//         const addDetail = {
//             name:getName,
//             age : getAge ,
//             key : Math.round(Math.random()*100)
//         }
//         if(getName.trim().length===0 ||  getAge.length===0){
//         props.setValid(true); props.setNeg(false); return;
//         }
//         else if(getAge<0){
//             props.setNeg(true); props.setValid(false); return;
//         }
//         props.takeDataForm(addDetail);
//         setNewfetchedAge('');
//         setNewfetchedName('');
//     }
//     const check = props.checkvalidBox;

//     const ClickHandler=()=>{
//         props.setValid(false); props.setNeg(false);
//         props.setValidBox(false);
//     }
//     return (
// <React.Fragment>
//        <form onSubmit={submitHandler} onClick={ClickHandler} >
//           <div className={`FormContainer ${check ? 'opacit' : ''}`} >
//             {/*  */}
//           <div className="detailFlex">
//              <label className="Details">Username</label>
//              <input className="EnterDetail" type="text" onChange={nameHandler} value={getName} ></input>
//              <label className="Details">Age {`(Years)`}</label>
//              <input className="EnterDetail" type="Number" onChange={ageHandler} value={getAge} ></input>
             
//          </div>
         
//              <Button type="submit" buttonValue="Add User"/>
//           </div>
//        </form>
// </React.Fragment> // istead of using div we can write this
// // now we going to understand portal in react -> we can put the whole code inside specific div
// // two imp things  this thing will be teached in invalidinput




//     );
// }

// export default Form;



///            ref ->>>>>>>>>>>

import '../input/input.css';

import Button from '../Button/Button';
import React , {useState , useRef} from 'react';
import './Form.css';

const Form = (props) =>{
   const nameInputRef =  useRef(); // take dom // now i don't need to use useState
   const ageInputRef = useRef();


    // ref -> we can select the whole element ( div )
    // it returns 

   

    
   
   
    const submitHandler = (event)=>{
        event.preventDefault();
//  use that ref here to take value
        const getName = nameInputRef.current.value;
        const getAge = ageInputRef.current.value;
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
        
        // reset
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }
    const check = props.checkvalidBox;

    const ClickHandler=()=>{
        props.setValid(false); props.setNeg(false);
        props.setValidBox(false);
    }
    return (
<React.Fragment>
       <form onSubmit={submitHandler} onClick={ClickHandler} >
          <div className={`FormContainer ${check ? 'opacit' : ''}`} >
            {/*  */}
          <div className="detailFlex">
             <label className="Details">Username</label>
             <input className="EnterDetail" type="text" 
             // auto 
              ref = {nameInputRef}
             
             ></input>
             <label className="Details">Age {`(Years)`}</label>
             <input className="EnterDetail" type="Number"
              
              ref={ageInputRef} // now don't need to use value to reset

             ></input>
             
         </div>
         
             <Button type="submit" buttonValue="Add User"/>
          </div>
       </form>
</React.Fragment> // istead of using div we can write this
// now we going to understand portal in react -> we can put the whole code inside specific div
// two imp things  this thing will be teached in invalidinput




    );
}

export default Form;