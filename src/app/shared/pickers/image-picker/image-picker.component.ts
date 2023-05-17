import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string>();

  selectedImage: string;

  constructor() {}

  ngOnInit() {}

  onPickImage() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Uri,
    })
      .then((image) => {
        this.selectedImage = image.webPath;
        this.imagePick.emit(image.webPath);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
