import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";

const Chart = (props) => {
  console.log('props :>> ', props);
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
       return ( <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />);
      })}
    </div>
  );
};

export default Chart;
