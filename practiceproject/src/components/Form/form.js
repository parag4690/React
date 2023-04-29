import React , {useReducer, useState , useContext} from "react";
import './form.css'
import Button from "../button/Button";
import NoteContext from "../../context/NoteContext";
// import { act } from "react-dom/test-utils";


const nameReducer = (state , action)=>{
     if(action.type ==='USER_INPUT'){
         return {value : action.val , isValid : action.val.trim().length>4};
     }
     if(action.type==='reset_input'){
        return {value : action.val , isValid :  action.val.trim().length>4};
     }


}

const passReducer = (state , action)=>{
    if(action.type='Pass_value'){
        return {value : action.val , isValid : action.val.trim().length>4}
    }
    if(action.type==='reset_pass'){
        return {value : '' , isValid : false};
     }

}

const Form = ()=>{
   // i can use this 
    // useReducer
    const a = useContext(NoteContext);
    const [formState , newFormState] = useState(false);

    const [nameState , dispatchName] = useReducer(nameReducer , {
        value: ' ' , isValid : false,
    })

    const [passState , dispatchpass] = useReducer(passReducer , {
        value : '', isValid : false , 
    })
    const nameHandler = (event)=>{
        newFormState(false);
        dispatchName({type:'USER_INPUT' , val : event.target.value}); // passing a object
    }
    const passHandler = (event)=>{
        newFormState(false);
        dispatchpass({type:'Pass_value' , val: event.target.value});
    }

    
    const submitHandler = (event)=>{
        event.preventDefault();
        //
        if(!nameState.isValid || !passState.isValid)
        {
            newFormState(true);
            return;
        }
        console.log(nameState.value , "adsf " , passState.value);

        a.validCheck(false);
        dispatchName({type:'reset_input' , val:'' });
        dispatchpass({type:'reset_pass' , val:''});
    }

    return (
        <div>
          <form onSubmit={submitHandler} className={`Form_container `}>
            <label>UserName</label>
            <input value={ nameState.value} onChange={nameHandler} type="text"></input>
            <label>Password</label>
            <input onChange={passHandler} value={passState.value}  type="password"></input>
            <Button className={` buttonClass ${formState ? 'inValid' : ''} `} type="submit" buttonValue="Login"
              disabled={formState}
            ></Button>
          </form>
        </div>
    );
}

export default Form;