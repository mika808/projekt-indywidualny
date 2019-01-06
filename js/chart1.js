var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: "Signups",
        data: [52, 50, 40, 95, 75, 5, 70, 10, 20, 88],
        backgroundColor: '#8DBEC8',//"DarkTurquoise"
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "FTD",
        data: [5, 70, 1, 5, 48, 10, 50, 44, 63, 77],
        backgroundColor: '#F29E4E', //"orange",
        borderColor: "black",
        borderWidth: 1
      },
      {
        label: "Earned",
        data: [60, 50, 65, 90, 66, 40, 15, 34, 40, 30],
        backgroundColor:   '#71B374', //"blue",
        borderColor: "black",
        borderWidth: 1,
        hidden: true
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Earnings chart",
      fontSize: 15
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
