import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  @ViewChild('fileInputID',{ static: false }) fileInput :ElementRef;

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
  cnt:number = 0;
  openExplorer($event){
    this.cnt++;
    console.log("out"+this.cnt);
    if(this.cnt < 2){
      this.fileInput.nativeElement.click();
    }
    if(this.cnt==2){
      $event.stopPropagation();
      /* this.fileInput.nativeElement.click(); */
    }
    else{
      this.cnt=0;
    }
  }

  deleteInputFile(){
    this.fileInput.nativeElement.value = null;//
  }
}
