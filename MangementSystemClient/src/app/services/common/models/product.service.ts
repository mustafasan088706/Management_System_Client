
import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Products } from 'src/app/contracts';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpclientService) {

    this.httpClient.get<Products[]>({
      controller:"dummytest",
      
    }).subscribe(data=>console.log(data));
   }




  create(product:Products,successCallBack?:any,errorCallBack?:any){
      this.httpClient.post({
        controller:"dummytest"},product).subscribe(result=>{ successCallBack();},(errorResponse:HttpErrorResponse)=>{
          const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
          let message="";
          _error.forEach((val,index)=>{
            val.value.forEach((_val,_index)=>{
              message+=`${_val}<br>`;
            });
          });
          errorCallBack(message);
        });
   
  }


}
