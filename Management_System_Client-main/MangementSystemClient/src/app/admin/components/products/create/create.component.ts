import { Component, NgProbeToken, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Products } from 'src/Contracts/contracts';
import { AlertifyOptions, AlertifyService, MessagePosition, MessageType } from 'src/app/services/adminservices/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']

})




export class CreateComponent extends BaseComponent implements OnInit {

  // estuaryShower = [true, false];
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;


  disabled2 = false;
  max2 = 100;
  min2 = 0;
  showTicks2 = false;
  step2 = 1;
  thumbLabel2 = false;
  value2 = 0;

  constructor(spinner:NgxSpinnerService,private productService: ProductService,private alertify:AlertifyService) {super(spinner) }

  ngOnInit(): void {

  }

  parseDate(expiryDate: string): Date {
    if (expiryDate) {
        return new Date(expiryDate);
    }
    return null;
}

  create(productname: HTMLInputElement, productcode: HTMLInputElement, materialname: HTMLInputElement, materialcode: HTMLInputElement, conductancemax: HTMLInputElement,conductancemin: HTMLInputElement, weight: HTMLInputElement, carbondioxide: HTMLInputElement, nitrogen: HTMLInputElement, lotnumber: HTMLInputElement,productimage:HTMLInputElement,notes:HTMLInputElement) {

    this.showSpinner(SpinnerType.BallClipRotate);
      const product:Products=new Products();
 
      product.productName=productname.value;
      product.productCode=productcode.value;
      product.materialName=materialname.value;
      product.materialCode=materialcode.value;
      product.conductanceMax=parseFloat(conductancemax.value);
      product.conductanceMin=parseFloat(conductancemin.value);
      product.weight=parseFloat(weight.value);
      product.carbonDioxide=parseFloat(carbondioxide.value);
      product.nitrogen=nitrogen.value;
      product.lotNumber=parseInt(lotnumber.value);
      product.productImage=productimage.value;
      product.notes=notes.value;
     
      // product.expiryDate=expirydate.value;
      //expirydate:HTMLInputElement

      if(!productname.value){
        this.alertify.message("Please enter a product name!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }


      if(!productcode.value){
        this.alertify.message("Please enter a product code!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }

      if(!materialname.value){
        this.alertify.message("Please enter a material name!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }


      // if(!conductancemax.value){
      //   this.alertify.message("Please enter a conductance value!",{
      //     dissmissOther:true,
      //     messageType:MessageType.Error,
      //     position:MessagePosition.TopRight
      //   })
      // }


      // if(!conductancemin.value){
      //   this.alertify.message("Please enter a conductance value!",{
      //     dissmissOther:true,
      //     messageType:MessageType.Error,
      //     position:MessagePosition.TopRight
      //   })
      // }

      // if(parseInt(conductance.value)<=770 ||  parseInt(conductance.value)>=1080){
      //   this.alertify.message("Your entered conductance value must be between '800' and '1080'",{
      //     dissmissOther:true,
      //     messageType:MessageType.Error,
      //     position:MessagePosition.TopRight
      //   })
      // }


      
      if(!weight.value){
        this.alertify.message("Please enter a weight value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }

      // if(parseInt(weight.value)<=1521 ||  parseInt(weight.value)>=1580){
      //   this.alertify.message("Your entered weight value must be between '1521' and '1580'",{
      //     dissmissOther:true,
      //     messageType:MessageType.Error,
      //     position:MessagePosition.TopRight
      //   })
      // }




      if(!materialcode.value){
        this.alertify.message("Please enter a material code!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }


      if(!carbondioxide.value){
        this.alertify.message("Please enter a carbondioxide value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }



      if(!nitrogen.value){
        this.alertify.message("Please enter a nitrogen value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }


      if(!lotnumber.value){
        this.alertify.message("Please enter a Lot Number value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }



      if(!productimage.value){
        this.alertify.message("Please enter a product image!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }


      if(!conductancemax.value){
        this.alertify.message("Please enter a maximum Conductance value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }

      if(!conductancemin.value){
        this.alertify.message("Please enter a minimum Conductance value!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }
      
      if(!notes.value){
        this.alertify.message("Please enter a note!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      }






      this.productService.create(product,()=>{
        this.hideSpinner(SpinnerType.BallClipRotate);
        this.alertify.message("Succesfuly added!",{
          dissmissOther:true,
          messageType:MessageType.Success,
          position:MessagePosition.TopRight,
        })
       
      },errorMessage=>{
        this.alertify.message(errorMessage,{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight
        })
      });
  }
}
