import { Doughnut } from 'react-chartjs-2';




export default function PieChart(props) {
    const data = {
        datasets: [{
            data: [40,60],
            backgroundColor: [
              "#3B82F6",
              "#BB82F6"
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Crypto',
            "Bonds"
        ]
    };

    const config = {
        type: 'doughnut',
        data: props.data,
      };
    return(
        <Doughnut options={config} data={props.data}/>
    )
}
