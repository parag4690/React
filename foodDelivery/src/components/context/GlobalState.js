import React , {createContext , useReducer, useState} from "react";

// AddItem

const AddItems = (state , action)=>{
    switch (action.type){
        case 'ADD_ORDER':
            return {
                ... state , 
                AddItem : [...state.AddItem , action.order] ,
                
            }
        case 'NEW' :{
            return  action.newIn;
        }
        default : 
         return state;
    }
}

// initial state

const initialState = {
    AddItem : [
        {id:1 , name:"Halva" , amount:45 , val:1},
        {id:2 , name:"Chole bhature" ,amount:55 , val:1}
    ]
}

// create global context

export const GlobalContext = createContext(initialState);
// provider

export const GlobalProvider = (props)=>{
    const [state , dispatch] = useReducer(AddItems , initialState);
    const [valid , setvalid] = useState(false);
    const [custom , setcustom] = useState(false);
    // const [updateVal , setupdateVal] = useState();
    function addItemCart(trans){
        dispatch({
            type:'ADD_ORDER' , 
            order : trans
        })
    }
    // const validity = ()=>{
    //      setvalid(true);
    // }
    const newValue = (getid)=>{
        state.AddItem.map((item)=>{
            if(item.id==Number(getid)){
                item.val=item.val+1;
            }
            return item;
        })
        dispatch({
            type:'NEW' , 
            newIn : { AddItem : state.AddItem} // dyan dyan dyan dyan
        })
    }

    const negValue = (getid)=>{
        // console.log("getid = > " , getid , " check " , initialState.AddItem.length);
        state.AddItem.map((item)=>{
            if(item.id==Number(getid)){
                item.val=item.val-1;
            }
            return item;
        })
        state.AddItem = state.AddItem.filter((item) => {
            return item.val > 0;
          });
        console.log(state, "newState");
        dispatch({
            type:'NEW' , 
            newIn : { AddItem : state.AddItem} // dyan dyan dyan dyan
        })
    }

    return (
        <GlobalContext.Provider value={{AddItem : state.AddItem , addItemCart , setvalid , valid , newValue , negValue ,custom ,  setcustom} }>
            {props.children};
        </GlobalContext.Provider>
    )
}