import './ExpenseItems.css'
import Time from './Time';
// how can we change the name
import React , {useState} from 'react';


function ExpenseItem({title,amount , dat}){

    const [newtitle , setTitle] = useState(title);
// it is called by all four components in expense but it will work only for 1 at a time
    const changeTitle = ()=>{
        setTitle("updated");
        // console.log(title);
    }
    console.log("a;ldskfjadfjaslfkj");
    console.log(title , amount , dat , "adsfd" );

    return (
       <li className="container">
          <div className="container_inside">
            <Time time={dat}></Time>
            {/* <div className="car"> <h2> {props.title} </h2></div> */}
            <div className="car"> <h2> {title} </h2></div>

          </div>
          <div className="dolar" onClick={changeTitle}>${amount}</div>
       </li>
    );
}

export default ExpenseItem