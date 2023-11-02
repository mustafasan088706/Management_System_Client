import { Component, OnInit } from '@angular/core';
import { extend } from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/app/contracts';
import { HttpclientService } from 'src/app/services/common/httpclient.service';
import { MatDialog } from '@angular/material/dialog';

import { CreateComponent } from './create/create.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit {

  constructor( private dialog: MatDialog) {
  
  }


  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(CreateComponent, {
      width: "50%",
      height: "75%",

    });

  }

}


