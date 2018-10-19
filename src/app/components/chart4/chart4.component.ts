import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {
  chart4: any;
  backgroundColor4 = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  borderColor4 = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
  constructor() { }

  ngOnInit() {
    this.chart4 = new Chart('canvas4', {
      type: 'bar',
      data: {
        labels: ['0回', '1回', '2回', '3回', '4回', '5回', '6回', '7回', '8回', '9回', '10回'],
        datasets: [
          {
            label: 'TOP',
            data: [10, 20, 5, 7, 9, 3, 4, 6, 12, 45, 16],
            backgroundColor: this.backgroundColor4[0],
            borderColor: this.borderColor4[0],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor4[0],
            pointBackgroundColor: this.borderColor4[0],
          },
          {
            label: '自社',
            data: [4, 6, 12, 5, 7, 11, 45, 19, 26, 12, 23],
            backgroundColor: this.backgroundColor4[1],
            borderColor: this.borderColor4[1],
            borderWidth: 1,
            fill: false,
            lineTension: 0,
            pointBorderWidth: 1,
            pointBorderColor: this.borderColor4[1],
            pointBackgroundColor: this.borderColor4[1],
          }
        ]
      },
      options: {
        onHover: function () {
        },
        responsive: true,
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 0,
            fontColor: 'red'
          }
        },
        plugins: {
          datalabels: {
            display: function (context) {
              return context.chart.isDatasetVisible(context.datasetIndex);
            }
          },
        },
        scales: {
          scaleLabel: '<%= \' \' + value%> %',
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 10,
              max: 50,
              stepSize: 10,
              callback: function (value) {
                return value + '回';
              }
            },
            position: 'right',
            gridLines: {
              display: true,
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              padding: -7,
            },
            scaleLabel: {
              display: true,
              fontSize: 30,
            },
            gridLines: {
              offsetGridLines: false,
              display: false,
              lineWidth: 0,
              drawOnChartArea: false
            },

          }]
        },
        tooltips: {
          custom: function (tooltip) {
            const borderColor = ['rgba(96, 159, 238, 1)', 'rgba(195, 49, 51, 1)'];
            if (tooltip.dataPoints) {
              if (tooltip.dataPoints[0].datasetIndex === 0) {
                tooltip.backgroundColor = '#fff';
                tooltip.titleFontColor = borderColor[0];
                tooltip.labelTextColors[0] = borderColor[0];
                tooltip.borderColor = borderColor[0];

              } else if (tooltip.dataPoints[0].datasetIndex === 1) {
                tooltip.backgroundColor = '#fff';
                tooltip.borderColor = borderColor[1];
                tooltip.titleFontColor = borderColor[1];
                tooltip.labelTextColors[0] = borderColor[1];
              }
              console.log(tooltip);
            }
          },
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                borderColor: 'red',
                backgroundColor: 'red'
              };
            },
            label: function (tooltipItem, data) {
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const dslabelamtY = dataset.data[tooltipItem.index];
              if (dataset.label === 'TOP') {
              }
              return data.datasets[tooltipItem.datasetIndex].label + '   ' + dslabelamtY;
            },
          },
          mode: 'nearest',
          borderColor: 'red',
          displayColors: false,
          borderWidth: 2,
          yPadding: 10,
          xPadding: 10,
          caretSize: 6
        }
      }
    });
  }

}
