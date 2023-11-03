import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-end-of-production',
  templateUrl: './end-of-production.component.html',
  styleUrls: ['./end-of-production.component.css']
})
export class EndOfProductionComponent extends BaseComponent implements OnInit{


  constructor(spinner:NgxSpinnerService){
    super(spinner);
  }
  ngOnInit(): void {
this.showSpinner(SpinnerType.BallClipRotate)
  }
}
