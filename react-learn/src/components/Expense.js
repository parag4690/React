import './Expense.css'

function ExpenseItem(props) {
  // i have to write before return
    
    // const amount = 294.67;
  
    return ( 
    
    //  <h2>Expense item! uu </h2>  ->>>>>>>>>> error 
    //  <h2></h2> 
     
    // how to fix this 

    // <div>
    //  {/* u have to give parent element */}
    //   <h2> f </h2> <h2>f </h2> 
    // </div>

    // <h2></h2> error

    // <p></p>  i can't give any another i can only provide one root so make sure to add parent div


    // <div className='container'>
    //   <div className='container_inside'>
    //      <div className='date'>March 28th 2021</div>
    //      <h2 className='car'>Car Insurance</h2>
    //   </div>
    //     <div className='dolar'>${amount}</div> {/* in curly braces we can use js elements */}
    // </div>
//  i can use js function in react also but a little difference


// ->>>>>>>>>>>>>>                        reusable       ->>>>>>>>>>>>>>>>  through props

<div className='container'>
<div className='container_inside'>
   <div className='date'>{props.dat}</div>
   <h2 className='car'>{props.title}</h2>
</div>
  <div className='dolar'>${props.amount}</div> {/* in curly braces we can use js elements */}
</div>
    


     );
  }
  
  export default ExpenseItem;