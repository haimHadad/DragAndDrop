import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  @ViewChild('fileInputID',{ static: false }) fileInput :ElementRef;
  isFileInputClicked :boolean= true;
  isHovering: boolean;
  errorAmount:boolean = false;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    if(files.length > 1){
      this.errorAmount = true;
      return;
    }
    if(this.files.length > 0){
      this.errorAmount = true;
      return;
    }
    this.errorAmount = false;
    this.files.push(files.item(0));
    /* for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    } */
  }

  openExplorer($event){
    console.log(this.isFileInputClicked);
    this.fileInput.nativeElement.click();

  }

  deleteInputFile(){
    this.errorAmount = false;
    this.files.splice(0,1);
    this.fileInput.nativeElement.value = null;//
  }
}
