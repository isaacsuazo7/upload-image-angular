import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  @ViewChild('imageInput') myInputRef: ElementRef | undefined;
  
  selectedFiles?: FileList;
  currentFile?: File;
  previewImage = '';

  constructor() {}

  ngOnInit() {}

  handleFileInput(event: any): void {
    this.previewImage = '';
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.previewImage = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previewImage = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);

        console.log(this.previewImage);
        console.log(this.currentFile);
      }
    }
  }
}
