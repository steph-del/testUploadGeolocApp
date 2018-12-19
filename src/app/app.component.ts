import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  geolocatedPhotos = [];

  geolocatedPhotoData(data) {
    this.geolocatedPhotos = data;
  }
}
