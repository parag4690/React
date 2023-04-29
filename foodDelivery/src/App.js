import React , {Fragment, useContext} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { YourCart } from "./components/yourCart/YourCart";
import { GlobalContext } from "./components/context/GlobalState";
import CustomMealForm from "./components/CustomMeal/CustomMealForm";
import './App.css'
function App() {
  const context = useContext(GlobalContext);
  return (
    <Fragment>
      <div className={`baap ${context.valid || context.custom ? 'in' : ''}`}>
      <Header/>
      <main className="task">
          <Meals/>
      </main></div>
      {
        context.valid &&
      <YourCart/>
     }
     { context.custom &&
      <CustomMealForm/>
     }
    </Fragment>
  );
}

export default App;
