export const lineGraphData = {
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

export const pieChartData = {
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