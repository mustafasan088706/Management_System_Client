import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  // message(message:string,messageType:MessageType,position:MessagePosition,delay:number,dissmissOther:boolean=false) {

    message(message:string,options:Partial<AlertifyOptions>){
      //AleritfyOptions partial olarak tanimlandi ki kullanilacagi yerde bir nesne olusturmakla ugrasmadan direk { } icerisinde tanimlayip kullanabilelim.

    const msg=alertify[options.messageType](message);//If ya da switch yapisi yerine bu sekilde bir js yapilanmasi kullanmak daha kolaydir.

    alertify.set('notifier','position', options.position);

    alertify.set('notifier','delay', options.delay);

    if(options.dissmissOther){
      msg.dissmissOther();
    }

  }

  dissmiss(){
    alertify:this.dissmiss();
  }
}


export class AlertifyOptions{
messageType:MessageType=MessageType.Message;
position:MessagePosition=MessagePosition.TopRight;
delay:number;
dissmissOther:boolean=false;

}

export enum MessageType{

  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
}


export enum MessagePosition{
  BottomRight="bottom-right",
  TopRight="top-right",
  TopCenter="top-center",
  TopLeft="top-left",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}