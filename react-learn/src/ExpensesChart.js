import React from 'react';
import Chart from './Chart/Chart';

const Expensechart = (props)=>{
    const chartDataPoints = [
        {label : 'Jan' , value : 0} ,
        {label : 'Feb' , value : 0} ,
        {label : 'Mar' , value : 0} ,
        {label : 'Apr' , value : 0} ,
        {label : 'May' , value : 0} ,
        {label : 'Jun' , value : 0} ,
        {label : 'Jul' , value : 0} ,
        {label : 'Aug' , value : 0} ,
        {label : 'Sep' , value : 0} ,
        {label : 'Oct' , value : 0} ,
        {label : 'Nov' , value : 0} ,
        {label : 'Dec' , value : 0} ,
    ];

    console.log(props.expenses , "agya khel me");

    for(const expense of props.expenses){ // we can't put in here because it is array not an object
        console.log(expense.date.getMonth() , "expensechart me hu k kr lega ");
        chartDataPoints[expense.date.getMonth()].value +=expense.amount;
    }


    return (
       <Chart dataPoints={chartDataPoints} />
    );
};

export default Expensechart;