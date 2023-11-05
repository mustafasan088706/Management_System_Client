
import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Products } from 'src/Contracts/contracts';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductLists } from 'src/Contracts/product-lists';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpclientService) {

    this.httpClient.get<Products[]>({
      controller:"dummytest",
      
    }).subscribe(data=>console.log(data));
   }


  create(product:Products,successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void){
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

 async read(page:number=0,size:number=5,successCallBack?:()=>void,errorCallBack?:(errorMessage:string)=>void):Promise<{totalCount:number;products:ProductLists[]}>{
    const promiseData :Promise<{totalCount:number;products:ProductLists[]}>= this.httpClient.get<{totalCount:number;products:ProductLists[]}>({
      controller:"dummytest",
      queryString:`page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d=>successCallBack())
    .catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message))

    return await promiseData;
  }

 async delete(id:string){
     const deleteObs= this.httpClient.delete<any>({
        controller:"dummytest"
      },id)

      await firstValueFrom(deleteObs);
  }


}
