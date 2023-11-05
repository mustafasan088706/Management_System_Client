import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Products } from 'src/Contracts/contracts';
import { ProductLists } from 'src/Contracts/product-lists';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/adminservices/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent implements OnInit{



  displayedColumns: string[] = ['id','productName','productCode','materialName','materialCode','conductanceMin','conductanceMax','weight','carbonDioxide','nitrogen','lotNumber','createdDate','updatedDate','notes','delete'];
  dataSource : MatTableDataSource<ProductLists>=null;
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;


constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertify:AlertifyService){super(spinner)}

  async ngOnInit() {
    await this.getProducts();
  }

  async getProducts(){
    this.showSpinner(SpinnerType.BallClipRotate);
    const allProducts:{totalCount:number;products:ProductLists[]}= await this.productService.read(this.paginator ? this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,()=>this.hideSpinner(SpinnerType.BallClipRotate),errorMessage=>this.alertify.message(errorMessage,{
      dissmissOther:true,
      messageType:MessageType.Error,
      position:MessagePosition.TopRight
    }))
    this.dataSource=new MatTableDataSource<ProductLists>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
    // this.dataSource.paginator = this.paginator;
  }

  async pageChanged(){
    await this.getProducts();
  }

  @ViewChild(ListComponent) listComponents:ListComponent;
  createdProduct(createdProduct:Products){
      this.listComponents.getProducts();
  }


}
