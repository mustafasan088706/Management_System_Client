import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions = {}
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {

      chart: {
        type: 'area'
      },
      title: {
        text: 'Test Datas',
        align: 'center'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
          'target="_blank">SSB</a>',
        align: 'left'
      },

      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      // series: [{
      //   name: 'Test Data 1',
      //   data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      // }, {
      //   name: 'Test Data 2',
      //   data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

      // }, {
      //   name: 'Test Data 3',
      //   data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      // }, {
      //   name: 'Test Data 4',
      //   data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

      // }, {
      //   name: 'Test Data 5',
      //   data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
      // }]
      series: this.data
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}


