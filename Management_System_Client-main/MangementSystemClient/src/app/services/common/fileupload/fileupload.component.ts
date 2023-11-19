import { Component, Input } from '@angular/core';

import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpclientService } from '../httpclient.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessagePosition, MessageType } from '../../adminservices/alertify.service';
import { MessageTypeToastr, PositionType, ToastrServiceCustom } from '../../uiservices/toastr.service.custom';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent, FileUploadDialogState } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
import { DialogService } from '../dialog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  constructor(
    private httpClientService: HttpclientService,
    private alertifyService: AlertifyService,
    private toastr: ToastrServiceCustom,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private spinner: NgxSpinnerService,

  ) { }
  public files: NgxFileDropEntry[];

  @Input() options: Partial<fileUploadOptions>

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;

    const fileData: FormData = new FormData();

    for (const file of files) {

      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath)
      });
    }

    this.dialogService.openDialog({

      componentType: FileUploadDialogComponent,
      data: FileUploadDialogState.Yes,


      afterClosed: () => {
        this.spinner.show(SpinnerType.BallClipRotate);
        this.httpClientService.post({
          controller: this.options.controller,
          action: this.options.action,
          queryString: this.options.queryString,
          headers: new HttpHeaders({ "responseType": "blob" })
        }, fileData).subscribe(data => {

          const message: string = "Files succesfuly added";
          this.spinner.hide(SpinnerType.BallClipRotate);
          if (this.options.IsAdminPage) {
            this.alertifyService.message(message, {
              dissmissOther: true,
              messageType: MessageType.Success,
              position: MessagePosition.BottomRight
            })
          } else {
            this.toastr.message(message, "Succesfuly", {
              messageType: MessageTypeToastr.Success,
              position: PositionType.BottomRight
            })
          }


        }, (errorResponse: HttpErrorResponse) => {

          const message: string = "Files cannot added.Unexpected error occured";

          this.spinner.hide(SpinnerType.BallClipRotate);

          if (this.options.IsAdminPage) {
            this.alertifyService.message(message, {
              dissmissOther: true,
              messageType: MessageType.Error,
              position: MessagePosition.BottomRight
            })
          } else {
            this.toastr.message(message, "Succesfuly", {
              messageType: MessageTypeToastr.Error,
              position: PositionType.BottomRight
            })
          }
        })
      }
    })



  }

  // openDialog(afterClosed: any): void {
  //   const dialogRef = this.dialog.open(FileUploadDialogComponent, {
  //     data: FileUploadDialogState.Yes,
  //     width: "400px"
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result == FileUploadDialogState.Yes) {
  //       afterClosed();
  //     }
  //   });
  // }


}


export class fileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  IsAdminPage?: boolean = false;
}



