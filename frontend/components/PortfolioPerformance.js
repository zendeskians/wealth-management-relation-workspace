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

  const data = {
    labels:["January","February","March","April","May","June","July","August","Sept"],
    datasets: [
      {
        label:"Primary Portfolio",
        data: [1, 2.234, 1.324, 4.123, 2.332, 4.234, 5.234234, 5.123, 7],
        borderColor: '#3B82F6',
      },
      {
        label:"Market Portfolio",
        data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
        borderColor: '#BB82F6',

      },
    ],
  };

  //   and finally lets return a chart component with our api data and
  //   config
  return (
    <div className="chart-container w-full h-1/2 p-2">
      <Line data={data} options={Config}  />
    </div>
  );
};

export default PortfolioPerformance;
