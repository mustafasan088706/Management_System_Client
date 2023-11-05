import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) { }



  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

 
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }


}



export enum SpinnerType {
  BallScaleMultiple = "ballscalemultiple",
  BallClipRotate = "ballcliprotate",
  SquareJollyBox = "squarejollybox"

}
