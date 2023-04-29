import { createContext , useState } from "react";

const NoteContext = createContext();

export const NoteState = (props) =>{
    //
    const [income , setincome] = useState("$0");
    const [expense , setexpense] = useState("$0");
    const [total , settotal] = useState("$0");
    const dummy = [
        // {
        //     title : "Cash" , 
        //     money : 500 , 
        //     sign : 1 , // 1 or zero
        // },
        // {
        //     title : "Book" , 
        //     money : 500 , 
        //     sign : 0 , // 1 or zero
        // }
       ]
       const [histArray , sethistArray] = useState(dummy);
       const historyHandler = (added)=>{
        sethistArray((prev)=>{
            return [...prev , added];
        })
       }
       const incomeHandler=(incometaken)=>{
           setincome(incometaken);
       }
       const expenseHandler = (expensetaken)=>{
        setexpense(expensetaken);
       }
       const totalHandler = (totalTaken)=>{
        settotal(totalTaken);
       }
       const clearHandler = (taken)=>{
              sethistArray(taken);
       }
    //    console.log("kjhkj");
    return (
        <NoteContext.Provider value={{histArray , historyHandler , income , expense 
        , total , incomeHandler , expenseHandler , totalHandler , clearHandler }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContext;