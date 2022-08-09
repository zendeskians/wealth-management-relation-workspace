import { Doughnut } from 'react-chartjs-2';




export default function PieChart(props) {
    
    const config = {
        type: 'doughnut',
        data: props.data,
      };
    return(
        <Doughnut options={config} data={props.data}/>
    )
}