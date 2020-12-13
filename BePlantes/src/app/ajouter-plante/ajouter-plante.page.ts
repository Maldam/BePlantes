import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PlanteModele } from '../modeles/plante.modele';

@Component({
  selector: 'app-ajouter-plante',
  templateUrl: './ajouter-plante.page.html',
  styleUrls: ['./ajouter-plante.page.scss'],
})
export class AjouterPlantePage implements OnInit {
  private plante: PlanteModele = new PlanteModele; 

  constructor(
    private camera: Camera,
    //= new PlanteModele()

  ) { }

  private async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }
  private async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }
  ngOnInit() {
  }

}
