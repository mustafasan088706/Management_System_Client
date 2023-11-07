import { Component, OnInit } from '@angular/core';
import { extend } from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/Contracts/contracts';
import { HttpclientService } from 'src/app/services/common/httpclient.service';
import { MatDialog } from '@angular/material/dialog';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent  implements OnInit {

  constructor( private dialog: MatDialog,
     spinner:NgxSpinnerService) {super(spinner)
  
  }


  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallClipRotate);

    setTimeout(() => {
      this.hideSpinner(SpinnerType.BallClipRotate)
    },1000);
  }


  openDialog() {
    this.dialog.open(CreateComponent, {
      width: "50%",
      height: "75%",

    });

  }


  openDialogTwo() {
    this.dialog.open(ListComponent, {
      width: "100%",
      height: "90%",

    });

  }

}


