import { Component, NgProbeToken, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/app/contracts';
import { AlertifyOptions, AlertifyService, MessagePosition, MessageType } from 'src/app/services/adminservices/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']

})


export class CreateComponent extends BaseComponent implements OnInit {

  // estuaryShower = [true, false];

  constructor(spinner:NgxSpinnerService,private productService: ProductService,private alertify:AlertifyService) {super(spinner) }

  ngOnInit(): void {

  }

  create(productname: HTMLInputElement, productcode: HTMLInputElement, materialname: HTMLInputElement, materialcode: HTMLInputElement, conductance: HTMLInputElement, weight: HTMLInputElement, carbondioxide: HTMLInputElement, nitrogen: HTMLInputElement, lotnumber: HTMLInputElement,productimage:HTMLInputElement,notes:HTMLInputElement,expirydate:HTMLInputElement) {

    this.showSpinner(SpinnerType.BallClipRotate);
      const product:Products=new Products();
      product.productName=productname.value;
      product.productCode=productcode.value;
      product.materialName=materialname.value;
      product.materialCode=materialcode.value;
      product.conductance=parseFloat(conductance.value);
      product.weight=parseFloat(weight.value);
      product.carbonDioxide=parseFloat(carbondioxide.value);
      product.nitrogen=nitrogen.value;
      product.lotNumber=parseInt(lotnumber.value);
      product.productImage=productimage.value;
      product.notes=notes.value;
      expirydate.value;

      this.productService.create(product,()=>{
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.alertify.message("Succesfuly added!",{
          dissmissOther:true,
          messageType:MessageType.Success,
          position:MessagePosition.TopRight,
        })
       
      });
  }
}
