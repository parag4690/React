import React, { Fragment , useState , useRef } from "react";
import Form from "./Form";
export const Addcontent = (props)=>{
/********************         using context              ***************** */















/********                     without context             *************** */


    // ref doesn't need to render whole page again and again , 
//     const [valid , setvalid] = useState(true);
//   const nameRef = useRef("parag"); // initial value
//   const clicked = ()=>{
//     setvalid(false);
//   } 
//   const submitHandler = (event)=>{
//      event.preventDefault();
//      props.val(nameRef.current.value);
     
//   }
//   return (
//     <Fragment>
//      { valid && <button onClick={clicked}>
//         Add Content
//       </button>
//      }
//      { !valid && 
//        <Form nameRef={nameRef} onSubmit={submitHandler}/>
//      }
//       </Fragment>
//    );
}