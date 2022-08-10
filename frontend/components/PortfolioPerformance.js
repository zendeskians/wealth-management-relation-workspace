import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

// import our custom configuration for our chart
import { Config } from "./ChartConfig";


const PortfolioPerformance = (props) => {
  //   this function will format our data to a much readable and
  //   useful form for chart.js

  //   we will provide some minor customizations for our chart
  //   and also its labels and inputs

  //   and finally lets return a chart component with our api data and
  //   config
  return (
    <div className="chart-container w-full p-2 h-full">
      <Line data={props.data} options={Config}  />
    </div>
  );
};

export default PortfolioPerformance;
