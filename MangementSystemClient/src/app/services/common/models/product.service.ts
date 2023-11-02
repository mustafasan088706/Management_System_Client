
import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Products } from 'src/app/contracts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpclientService) {

    this.httpClient.get<Products[]>({
      controller:"dummytest",
      
    }).subscribe(data=>console.log(data));
   }




  create(product:Products,successCallBack?:any){
      this.httpClient.post({
        controller:"dummytest"},product).subscribe(result=>{ successCallBack(); alert("Basarili.")} );
   
  }


}
