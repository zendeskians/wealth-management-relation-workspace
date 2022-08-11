export const lineGraphData = [
    {
        labels:["January","February","March","April","May","June","July","August","Sept"],
        datasets: [
        {
            label:"Primary Portfolio",
            data: [-1.5, 2.234, 1.324, 4.123, 2.332, 4.234, 5.234234, 5.123, 7],
            borderColor: '#3B82F6',
        },
        {
            label:"Market Portfolio",
            data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
            borderColor: '#BB82F6',

        },
        ],
    },
    {
        labels:["January","February","March","April","May","June","July","August","Sept"],
        datasets: [
        {
            label:"Primary Portfolio",
            data: [1, 1.234, 1.324, 4.123, 5.332, 2.234, 7.234234, 9.123, 8],
            borderColor: '#3B82F6',
        },
        {
            label:"Market Portfolio",
            data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
            borderColor: '#BB82F6',

        },
        ],
    },
    {
        labels:["January","February","March","April","May","June","July","August","Sept"],
        datasets: [
        {
            label:"Primary Portfolio",
            data: [1, 2.234, 3.74, 5.523, 6.632, 3.534, 8.234234, 12.52546, 13],
            borderColor: '#3B82F6',
        },
        {
            label:"Market Portfolio",
            data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
            borderColor: '#BB82F6',

        },
        ],
    },
];

export const pieChartData = [
    {
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
    },
    {
        datasets: [{
            data: [30,20, 50],
            backgroundColor: [
            "#3B82F6",
            "#BB82F6",
            "#FF0000"
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Crypto',
            "Bonds",
            "Equities"
        ]
    },
    {
        datasets: [{
            data: [10,20, 20, 50],
            backgroundColor: [
            "#3B82F6",
            "#BB82F6",
            "#FF0000",
            "#FFCE30"
            ],
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Crypto',
            "Bonds",
            "Equities",
            "Futures"
        ]
    },
];

export const barChartData = [
    {
    labels: ["January","February","March","April","May","June","July"],
    datasets: [
      {
        label: "Monthly Returns",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ["January","February","March","April","May","June","July"],
    datasets: [
      {
        label: "Monthly Returns",
        data: [65, 59, 50, 81, 56, 30, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  {
    labels: ["January","February","March","April","May","June","July"],
    datasets: [
      {
        label: "Monthly Returns",
        data: [35, 79, 50, 91, 26, 30, 47],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  }
]
