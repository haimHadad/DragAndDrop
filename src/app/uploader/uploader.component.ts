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

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  openExplorer($event){
    console.log(this.isFileInputClicked);
    this.fileInput.nativeElement.click();

  }

  deleteInputFile(){
    this.fileInput.nativeElement.value = null;//
  }
}
