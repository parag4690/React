import { createContext, useState } from "react";

const NoteContext = createContext();

export const NoteState = (props) =>{
    const [isValid , setisValid] = useState(true);
    const [name , setname] = useState("parag");
    const state = {
        name : name,
        age : 18 ,
        
        valid : {isValid}
    }

    const setName = (nayanam)=>{
        setname(nayanam);
    }
    const validCheck = (v)=>{
        setisValid(v);
    }
    
    return (
        <NoteContext.Provider value={{state , setName , validCheck}}>
             {props.children}
        </NoteContext.Provider>
    );
}

export default NoteContext;