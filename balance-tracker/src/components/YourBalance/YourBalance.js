import React , {useContext} from "react";
import Summary from "./Summary/Summary";
import './YourBalance.css';
import NoteContext from "../context/NoteContext";

const YourBalance = () =>{
   const a = useContext(NoteContext);
   return (
      <div className="tracker">
        <div className="balance">Your Balance <br></br>
        <span>{a.total}</span></div>
        <div className="sumry">
            <Summary ex={0} head="INCOME" total={`${a.income}`}/>
            <Summary ex={1} head="EXPENSE"total={`${a.expense}`}/>
        </div>
      </div>
   );
}

export default YourBalance;