/* chart.js chart examples */

// chart colors

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 85, 
  responsive: true,
  
  plugins: {
    
    datalabels: {
      color: 'white',
      textAlign: 'center',
      fontFamily: "sans-serif",
      font: function (context) {
        var avgSize = Math.round((context.chart.height + context.chart.width) / 2);
        var size = Math.round(avgSize / 32);
        size = size > 15 ? 15 : size; // setting max limit to 12
        return {
            size: size,
            weight: 'bold'
        };
      },
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
            sum += data;
        });
        let percentage = ctx.chart.data.labels[ctx.dataIndex]+ "\n" + (value*100 / sum).toFixed(0)+"%";
        return percentage;
      }
    },
    tooltip: {
      enabled: false
    },
    legend: {
      display: false,
      position: 'bottom',
      labels: {
          boxWidth: 20,
          fontColor: '#111',
          padding: 15
      }
    }
  }
};

var pieColor = "#09872b";

// donut 1
var chDonutData1 = {
    labels: ['C#', 'Python', 'Java'],
    datasets: [
      {
        backgroundColor: pieColor,
        borderWidth: 2,
        borderColor: "black",
        data: [100, 50, 75],
      }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
      type: 'doughnut',
      data: chDonutData1,
      options: donutOptions,
      plugins: [ChartDataLabels]
  });
}

// donut 2
var chDonutData2 = {
    labels: ['Gameplay', 'Backend', 'A.I.'],
    datasets: [
      {
        backgroundColor: pieColor,
        borderWidth: 2,
        borderColor: "black",
        data: [100, 100, 100]
      }
    ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
  new Chart(chDonut2, {
      type: 'doughnut',
      data: chDonutData2,
      options: donutOptions,
      plugins: [ChartDataLabels]
  });
}

// donut 3
var chDonutData3 = {
    labels: ['Tech VFX', 'Shader graph', 'Gamejuice', 'Optimizations'],
    datasets: [
      {
        backgroundColor: pieColor,
        borderWidth: 2,
        borderColor: "black",
        data: [100, 40, 100, 70]
      }
    ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
  new Chart(chDonut3, {
      type: 'doughnut',
      data: chDonutData3,
      options: donutOptions,
      plugins: [ChartDataLabels]
  });
}

