import './CustomMeal.css'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
const CustomMeal = () =>{
    const context = useContext(GlobalContext);
    const customCheck = ()=>{
       context.setcustom(true);
    }
    return (
        <button onClick={customCheck} className='custom'>Custom Meal</button>
    )
}

export default CustomMeal;