import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'highcharts';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/adminservices/alertify.service';
import { HttpclientService } from 'src/app/services/common/httpclient.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $:any; 


@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private httpClientService: HttpclientService,
    private spinner:NgxSpinnerService,
    public dialog:MatDialog,
    private alertify:AlertifyService
    ) {

      const img=renderer.createElement("img");
      img.setAttribute("src","../../../../../assets/deleteDirective.png");
      img.setAttribute("style","cursor:pointer;");
      img.width=25;
      img.height=25;
      renderer.appendChild(element.nativeElement,img);
     }

@Input() id:string;
@Output() callback:EventEmitter<any>=new EventEmitter();

@Input() controller:string;

     @HostListener("click")
     async onclick(){
      this.openDialog(async()=>{
        this.spinner.show(SpinnerType.BallClipRotate);
        const td:HTMLTableCellElement=this.element.nativeElement;
      this.httpClientService.delete({
        controller:this.controller

      },this.id).subscribe(data=>{
        $(td.parentElement).animate({
          opacity:0,
          left:"+=50",
          height:"toggle"
        },700,()=>{
          this.callback.emit();
          this.alertify.message("Product succesfuly deleted",{
            dissmissOther:true,
            messageType:MessageType.Success,
            position:MessagePosition.TopRight

          })
        })
      },(errorResponse:HttpErrorResponse)=>{
        this.spinner.hide(SpinnerType.BallClipRotate)
        this.alertify.message("Something unexpected happened while trying to delete product!",{
          dissmissOther:true,
          messageType:MessageType.Error,
          position:MessagePosition.TopRight

        })
      })
      
        // .fadeOut(2000,()=>{
        //  
        // });
      });
   
     }
     openDialog(afterClosed:any): void {
      const dialogRef = this.dialog.open(DeleteDialogComponent, {
        data: DeleteState.Yes,
      
      });
  
      dialogRef.afterClosed().subscribe(result => {
       if(result==DeleteState.Yes){
            afterClosed();
       }
      });
    }
}
