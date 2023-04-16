import React , {useState} from "react";
import './CourceForm.css'
const CourceForm = (props) =>{
    const [newValue , setnewValue] = useState('');
    const inputHandler  = (event) =>{
         setnewValue(event.target.value);
    }
    // now send this data to parent
    
    const submitHandler = (event)=>{
        event.preventDefault(); // it prevents the page to referesh
        // now store the data into some variable and send this to parent through props

        const newData = newValue;
        props.getDataform(newData);
        setnewValue('');
    }
    const validity = props.checkValid;
     
     return (
        <form onSubmit={submitHandler}>
            <div className="formContainer">
            {/* <label style={{color : !validity ? 'red' : 'black'  }} className="titleGoal">Cource Goal</label>
            <input style={{border : !validity ? '2px solid red' : '2px solid rgb(221, 215, 215) ' ,  boxShadow: !validity ? '0 0 10px 1px red' : '0 0 0px 0px red'    }} type="text" onChange={inputHandler} value={newValue}></input> */}
            
            {/* the above method is very old and it is not suggested to use instead use this new method dynamicaly  */}

            <label  className={`titleGoal ${!validity ? 'invalid' : ''} ` }>Cource Goal</label>
            <input type="text" onChange={inputHandler} value={newValue}   className={`inputStyling ${!validity ? 'invalid' : ''}`} ></input>
            
            <button type="submit" className="submitButton">Add Goal</button>
            </div>
        </form>
     );
}

export default CourceForm;