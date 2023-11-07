import { Component, Input } from '@angular/core';

import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpclientService } from '../httpclient.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  constructor(private httpClientService: HttpclientService) { }
  public files: NgxFileDropEntry[];

  @Input() options:Partial<fileUploadOptions>

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;

    const fileData: FormData = new FormData();

    for (const file of files) {

      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath)
      });
    }
    this.httpClientService.post({
        controller:this.options.controller,
        action:this.options.action,
        queryString:this.options.queryString,
        headers:new HttpHeaders({"responseType":"blob"})
    },fileData).subscribe(data=>{

    },(errorResponse:HttpErrorResponse)=>{

    })
  }
}


export class fileUploadOptions{
      controller?:string;
      action?:string;
      queryString?:string;
      explanation?:string;
      accept?:string;
}
