import React, { useState  , useEffect , useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = (state , action)=>{ // why outside , because we are not communicating the value's inside this function
  if(action.type=== 'USER_INPUT'){
    return {value : action.val , isValid : action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value , isValid :  state.value.includes('@')} ; // jo last value thi vo utha lega
  }
  
  return {value : '' , isValid : false};
}; 

const passReducer = (state , action)=>{ // why outside , because we are not communicating the value's inside this function
  if(action.type=== 'USER_PASS'){
    return {value : action.val , isValid : action.val.trim().length > 6};
  }
  if(action.type === 'PASS_BLUR'){
    return {value: state.value , isValid :  state.value.trim().length > 6} ; // jo last value thi vo utha lega
  }
  
  return {value : '' , isValid : false};
}; 

const Login = (props) => {
 
  const [formIsValid, setFormIsValid] = useState(false);


// use reducer -> like enteremail and email valid work on same 

const [emailState , dispatchEmail] = useReducer(emailReducer ,
  
  {
    value: '' , isValid : true,
  }
  
  ); // or , initial state t


// 
const [passState , dispatchPass] = useReducer(passReducer , {
  value : '' ,  isValid : true ,
})











   // wheneven passward and name changes it should inVoke
  
  useEffect(()=>{

    // now whenever i am typing it is rendering and send the load to server , use settime out
  // settimeout return the identfier of time
 const identfier =   setTimeout(()=>{
    console.log("checking");
    setFormIsValid(
       emailState.isValid && passState.value.trim().length > 6
    );

    } , 500);
    // we can rturn 
    
    return ()=>{
      
       console.log("cleanup");
       clearTimeout(identfier); //first it will clean time of prev then move formard , so if u write very fast ti will not time the prev one
    }; // clean up function expect for the first time before exectuing above 
    // this statement runs first
  } , [emailState.isValid , passState.value]);   // it dependece on  

  // empty means at refresh time it will render also


  const emailChangeHandler = (event) => {
    // imp->
    dispatchEmail({type:'USER_INPUT' , val : event.target.value});
    
  };

  const passwordChangeHandler = (event) => {
     dispatchPass({type : 'USER_PASS' , val : event.target.value});

  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR' }); // we need just type
  };

  const validatePasswordHandler = () => {
    dispatchPass({type:'PASS_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;



/* useReduce->

const reducer = (state , action) =>{

}

const [state , dispatch] = useReduces(reducer , initialState); // state-> current state
distpatch will perform the action 

follow abover expample


*/