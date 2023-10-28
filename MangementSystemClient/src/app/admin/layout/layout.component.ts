import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/ui/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
sideBarOpen=true;

constructor(private alertify:AlertifyService){}//
  ngOnInit(){
     this.alertify.message("Test",{
      messageType:MessageType.Error,
      delay:15,
      position:MessagePosition.TopRight
     })
    //25 saniye boyunca ve birden cok msj yollamaya izin verecek sekilde ayarlandi.true yaparsak yalnizca tek bir msj yollariz.
   }

  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }
}
