import React , {Fragment} from "react";
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderButton from "./HeaderButton";
const Header=()=>{
  return (
      <Fragment>
         <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderButton/>
         </header>
         {/* when we use - here then then we have to use classes like this */}

         <div className={classes['main-image']}> 
            <img src={mealsImg} alt="A table full of delicious"/>
         </div>
      </Fragment>
  );
}

export default Header;