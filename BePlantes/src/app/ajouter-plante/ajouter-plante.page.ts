import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { PlanteModele } from '../modeles/plante.modele';
import { PlantesService } from '../services/plantes.service';

@Component({
  selector: 'app-ajouter-plante',
  templateUrl: './ajouter-plante.page.html',
  styleUrls: ['./ajouter-plante.page.scss'],
})
export class AjouterPlantePage implements OnInit {
  private plante: PlanteModele = new PlanteModele;
  private image: string;
  private imageVide: string ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Belgium_brussels_iris.svg/1054px-Belgium_brussels_iris.svg.png';
  private nomImage: string;

  constructor(
    private plantesService: PlantesService,
    private camera: Camera,
    private loadingController: LoadingController,
    private alertController: AlertController,
    //= new PlanteModele()

  ) { }

  public async ajoutPlante() {
    const loading = await this.loadingController.create({
    });
    const alert = await this.alertController.create({
      header: 'Félicitation',
      message: 'L\'article a bien été ajouté',
      buttons: ['OK']
    });
    const alertNom = await this.alertController.create({
      header: 'Attention',
      message: 'Nous avons besoin d\'un nom de produit',
      buttons: ['OK']
    });
    const articleExiste = await this.alertController.create({
      header: 'Attention',
      message: 'Cet article existe déjà',
      buttons: ['OK']
    });
    var index = this.plantesService.numeroIndex(this.plante.surnom);
    if (index === -1) {
      if (this.plante.surnom == undefined) {
        await alertNom.present();
      } else {
        await loading.present();
        if (this.image == undefined) {
          //console.log("ici")
          //this.image = 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg';
          await loading.dismiss();
          await alert.present();
        } else {
          this.nomImage = 'Produits/' + this.plante.surnom + '.jpg';
          this.plantesService.ajouterImage(this.nomImage, this.image).then(ref => { this.image = this.imageVide; loading.dismiss(); alert.present(); })
          this.plante.imageURL = 'https://firebasestorage.googleapis.com/v0/b/camos-266e6.appspot.com/o/Produits%2F' + this.plante.surnom + '.jpg?alt=media&token=03dbf0d3-b9d6-40ae-99c7-2af2486a69e5'
          //this.produitsService.angularFireStorage.ref('').getDownloadURL().subscribe(imageURL => { console.log(imageURL) })
        }
        // if(this.categorieProduitStatus){
        //   this.plante.categorie = this.nouvelleCategorie
        //   this.plantesService.createCategorieProduit(this.plante)
        //   this.categorieProduitStatus=false
        // }
        // //this.plante.keyFournisseur = this.fournisseur.key
         this.plantesService.createPlante(this.plante).then(ref => { this.plante = new PlanteModele 
          // this.fournisseur = new ClientModele();
        // //  this.navCtrl.back()
         });
      }
    } else {
      await articleExiste.present();
    }
  }
  public async ajouterPhoto(source: string) {
    if (source == 'galerie') {
      const galerieImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + galerieImage;
    } else {
      const cameraImage = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraImage;
    }
    return this.image
  }

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
