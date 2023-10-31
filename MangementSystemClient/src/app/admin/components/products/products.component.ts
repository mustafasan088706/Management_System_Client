import { Component, OnInit } from '@angular/core';
import { extend } from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/app/contracts';
import { HttpclientService } from 'src/app/services/common/httpclient.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit{
  
  constructor(spinner:NgxSpinnerService,private httpClient:HttpclientService){
    super(spinner);
  }
  
  
  ngOnInit(): void {
      this.showSpinner(SpinnerType.BallClipRotate);

      //get istegi yapiyoruz.
      this.httpClient.get<Products[]>({
        controller:"dummytest",
        
      }).subscribe(data=>console.log(data));
  

      //post islemi yapiyoruz..
      // this.httpClient.post({
      //   controller:"dummytest" },{
      //     productName :"Angular uzerinden gonderildi",
      //     carbonDioxide:6.00,
      //     conductance :1650,
      //     estuaryShower:false,
      //     lotNumber :5,
      //     materialCode:"6546566544",
      //     materialName :"FromAngular",
      //     nitrogen:"Yok",
      //     notes:"laskjfljaljlaw",
      //     productCode:"111111111111",
      //     productImage:"ölkkjhgjgjf",
      //     weight :1552

      
    
      //   }).subscribe(data=>console.log(data));
  




        this.httpClient.put({
          controller:"dummytest"},{

            id:"DEF34AAA-195C-4315-961B-8FE98C262771",
            productName :"Musti yolladi2.",
            carbonDioxide:6.00,
            conductance :1650,
            estuaryShower:false,
            lotNumber :5,
            materialCode:"6546566544",
            materialName :"FromAngular",
            nitrogen:"Yok",
            notes:"laskjfljaljlaw",
            productCode:"111111111111",
            productImage:"ölkkjhgjgjf",
            weight :1552
          
      }).subscribe(data=>console.log(data));



      this.httpClient.delete({
        controller:"dummytest"},

          "179CF4B0-9BEE-42B9-BEDD-F6743C8E1673",
  
        
    ).subscribe(data=>console.log(data));


    }



}
