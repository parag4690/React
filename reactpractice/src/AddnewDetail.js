import React from "react";
import './App.css'
const AddnewDetail = (props) =>{
    const updateArray = props.sendObjectArray;
    if(updateArray.length === 0 )
     return;

    
    return (
        <div  className='addedDetail'>
           {
              updateArray.map((ex )=>(
                <div key={ex.key}  className="items"> <div className="inside">{ex.name} {ex.age} </div></div>
              )) // use () inseted of { } otherwise u have to return
           }
        </div>
    )
}

export default AddnewDetail;