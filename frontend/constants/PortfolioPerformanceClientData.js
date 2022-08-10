export const lineGraphData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Sept",
  ],
  datasets: [
    {
      label: "Primary Portfolio",
      data: [1, 2.234, 1.324, 4.123, 2.332, 4.234, 5.234234, 5.123, 7],
      borderColor: "#3B82F6",
    },
    {
      label: "Market Portfolio",
      data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
      borderColor: "#BB82F6",
    },
  ],
};

export const pieChartData = {
  datasets: [
    {
      data: [40, 60],
      backgroundColor: ["#3B82F6", "#BB82F6"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Crypto", "Bonds"],
};

export const barChartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7 "],
  datasets: [
    {
      label: "My First Dataset",
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
};
