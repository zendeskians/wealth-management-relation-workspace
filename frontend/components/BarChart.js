import { Bar } from 'react-chartjs-2';
import { barChartData } from '../constants/PortfolioPerformanceClientData';
import {config} from "./BarChartConfig"



export default function BarChart(props) {

    return(
        <Bar options={config} data={props.data}/>
    )
}
