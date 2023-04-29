// dummy lists
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import CustomMeal from '../CustomMeal/CustomMeal';
const DUMMY_MEALS = [
    {
        id: 'm1' , 
        name : 'Pav Bhaji' ,
        description : 'This pav bhaji is made of fresh bread' ,
        price : 80 , 
    },
    {
        id: 'm2' ,
        name : 'Churma' ,
        description : 'This is home made ' , 
        price : 100,
    },
    {
        id : 'm3' , 
        name : 'Parantha' , 
        description : 'This is also home made' ,
        price : 150 ,
    } ,
    {
        id : 'm4' , 
        name : 'Momos' ,
        description : 'fresh meda' ,
        price : 69
    }
]

const AvailableMeals = () =>{
const mealsList = DUMMY_MEALS.map(meal => <MealItem name={meal.name} key={meal.id} description={meal.description} price={meal.price}></MealItem>);
       return <section className={classes.meals}>
       <Card>
        <ul>
            {mealsList}
        </ul>
        <CustomMeal/>
        </Card>
       </section>
}

export default AvailableMeals;