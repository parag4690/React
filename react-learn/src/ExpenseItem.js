import './ExpenseItems.css'
import Time from './Time';
// how can we change the name
import React , {useState} from 'react';


function ExpenseItem(props){

    const [title , setTitle] = useState(props.title);
// it is called by all four components in expense but it will work only for 1 at a time
    const changeTitle = ()=>{
        setTitle("updated");
        console.log(title);
    }

    return (
       <div className="container">
          <div className="container_inside">
            <Time time={props.dat}></Time>
            {/* <div className="car"> <h2> {props.title} </h2></div> */}
            <div className="car"> <h2> {title} </h2></div>

          </div>
          <div className="dolar" onClick={changeTitle}>${props.amount}</div>
       </div>
    );
}

export default ExpenseItem