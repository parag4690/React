import React , {useState , useContext} from "react";
import Form from "./components/Form/form";
import './App.css'
import Element from "./components/Element/Element";
import NoteContext from "./context/NoteContext";
const  App = ()=>{
  // const [isValid , setIsValid] = useState(true);
  const cn = useContext(NoteContext);
 
  console.log(cn.state.valid.isValid , " agya m fir se ");
  return (
      <div className="mainContainer">
         { cn.state.valid.isValid &&
             <Form/>
         }
        {  !cn.state.valid.isValid &&
           <Element/>
        }
     </div>
  );
}

export default App;

