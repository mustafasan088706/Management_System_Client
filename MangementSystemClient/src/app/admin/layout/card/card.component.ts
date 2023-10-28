import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() label : string="";
  @Input() total : string="";
  @Input() percentage : string="";
  @Input() data:any[]=[];
  @Input() data2:any[]=[];
  @Input() data3:any[]=[];
  @Input() data4:any[]=[];

  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }
  ngOnInit() {
    this.chartOptions = {

      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,

      },
      title: {
        text: null,
        align: 'center'
      },
      subtitle: {
        text: null,
        align: 'left'
      },
      legend: {
        enabled: false
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },

        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },

      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      credits: {
        enabled: false
      },
      series: [{
        data: this.data,
        data2:this.data,
        data3:this.data,
        data4:this.data
      }]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


}
