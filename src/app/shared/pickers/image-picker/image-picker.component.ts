import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string | File>();

  selectedImage: string;

  constructor() {}

  ngOnInit() {}

  onPickImage() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      height: 320,
      width: 600,
      resultType: CameraResultType.DataUrl,
    })
      .then((image) => {
        this.selectedImage = image.dataUrl;
        this.imagePick.emit(image.dataUrl);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
