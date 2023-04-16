import React  from "react";
import './Chart.css';
import './ChartBar.css';

const ChartBar = (props)=>{
    // default value of chart barr it depends on the value
    let barFillHeight = "0%";

    if(props.maxValue>0){ // do style dynamicaly
        barFillHeight=Math.round((props.value/props.maxValue) *100) + '%'; 
    }
    // console.log("bar ka size : " , barFillHeight);
    return (
        // css height of the 
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height : barFillHeight}}></div> 

            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
export default ChartBar;