import { Component } from '@angular/core';
import { MessageTypeToastr, PositionType, ToastrOptions, ToastrServiceCustom } from 'src/app/services/uiservices/toastr.service.custom';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // private toastr:ToastrServiceCustom
  constructor(){
    // toastr.message("Test","Test",{
    //   messageType:MessageTypeToastr.Warning,
    //   position:PositionType.BottomRight
    // })
  }

}
