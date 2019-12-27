import { Component, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.sass']
})
export class ChartJsComponent implements AfterViewInit {

  @ViewChild('lineChart', { static: false }) lineChart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;

  title = 'angular-chart-js';
  LineChart: Chart;
  BarChart: Chart;
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octobre',
    'Noviembre',
    'Diciembre'
  ];

  constructor(private cdref: ChangeDetectorRef) {

  }

  // ngOnInit() {
  //   this.LineChart = new Chart('lineChart', {
  //     type: 'line',
  //     data: {
  //       labels: ['Enero', 'Febrero', 'Marzo'],
  //       datasets: [{
  //         label: 'Mumero de item por mes',
  //         data: [12, 4, 6],
  //         fill: false,
  //         lineTension: 0.2,
  //         borderColor: 'red',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       title: {
  //         text: 'Line Chart',
  //         display: true
  //       },
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

  ngAfterViewInit() {
    this.createLineChart();
    this.createBarChart();
    this.cdref.detectChanges();
  }

  createLineChart() {
    let ctxLineChart = this.lineChart.nativeElement.getContext('2d');
    this.LineChart = new Chart(ctxLineChart, {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [
          {
            label: 'Monthly Revenues For The Year',
            data: [2, 3, 5, 2, 3, 5, 2, 3, 5, 2, 3, 5],
            fill: false,
            lineTension: 0.2,
            borderColor: 'red',
            borderWidth: 1,
          }
        ],
      },
      options: {
        title: {
          text: 'Monthly Revenue',
          display: true
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
      },
    });
  }

  createBarChart() {
    let ctxBarChart = this.barChart.nativeElement.getContext('2d');
    this.BarChart = new Chart(ctxBarChart, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7, 3, 5, 2, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
