import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) =>{
  // find maximum value
  const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log("total maxima;lkjdf   -> " , totalMaximum);
   return (
     <div className="chart">
          {
            props.dataPoints.map(dataPoint =>
                
                <ChartBar value={dataPoint.value}   
                     maxValue = {totalMaximum}   
                     label={dataPoint.label}
                     key={dataPoint.label}
                />
            )
            
          }

     </div>
   );
}

export default Chart;