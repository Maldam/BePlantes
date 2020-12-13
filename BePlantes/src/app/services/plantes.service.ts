import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { PlanteModele } from '../modeles/plante.modele';
import { Observable } from 'rxjs';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Injectable()
export class PlantesService {
  private plante: PlanteModele = new PlanteModele();
  private imageVide: string = this.plante.imageURL;
  //public plantes: Array<PlanteModele> = new Array<PlanteModele>();
  //public plantes2: Array<PlanteModele>;
  private image: string;
  constructor(
    private angularFireDatabase: AngularFireDatabase,
    private angularFireStorage: AngularFireStorage,
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    //private camera: Camera,
  ) {
    // this.getPlantes().subscribe(plantes => {
    //   this.plantes2 = plantes;
    // });
  }
  public createPlante(plante: PlanteModele) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireDatabase.list('Plantes/').push(plante)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
  public ajouterImage(nomImage: string, image: string) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireStorage.ref(nomImage).putString(image, 'data_url')
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }
  public getPlantes(): Observable<Array<PlanteModele>> {
    return new Observable<Array<PlanteModele>>(observer => {
      this.angularFireDatabase.list('Plantes/').snapshotChanges(['child_added', 'child_removed', 'child_changed', 'child_moved']).subscribe(plantesRecus => {
        let plantes: Array<PlanteModele> = new Array<PlanteModele>();
        plantesRecus.forEach(planteRecus => {
          let plante: PlanteModele = new PlanteModele();
          plante.key = planteRecus.key,
          plante.bouturage = planteRecus.payload.exportVal().bouturage,
            plante.nom = planteRecus.payload.exportVal().nom,
            plante.couleur = planteRecus.payload.exportVal().couleur,
            plante.description = planteRecus.payload.exportVal().description,
            plante.exposition = planteRecus.payload.exportVal().exposition,
            plante.floraison = planteRecus.payload.exportVal().floraison,
            plante.imageURL = planteRecus.payload.exportVal().imageURL,
            plante.mellifere = planteRecus.payload.exportVal().type,
            plante.notes = planteRecus.payload.exportVal().notes,
            plante.semis = planteRecus.payload.exportVal().semis,
            plante.taille = planteRecus.payload.exportVal().taille,
            plante.temperatureMaximum = planteRecus.payload.exportVal().temperatureMaximum,
            plante.temperatureMinimum = planteRecus.payload.exportVal().temperatureMinimum,
            plante.terrain = planteRecus.payload.exportVal().terrain,
            plante.vivace = planteRecus.payload.exportVal().vivace,
          plantes.push(plante);
          observer.next(plantes);
        })
      });
    });
  }
  public updatePlante(plante: PlanteModele): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      this.angularFireDatabase.list('Plantes/').update(plante.key, { 
        bouturage: plante.bouturage,
        nom: plante.nom, 
        couleur: plante.couleur, 
        description: plante.description,
        exposition: plante.exposition, 
        floraison: plante.floraison,
        imageURL: plante.imageURL,
        mellifere: plante.mellifere,
        notes: plante.notes,
        semis: plante.semis,
        taille: plante.taille,
        temperatureMaximum: plante.temperatureMaximum,
        temperatureMinimum: plante.temperatureMinimum,
        terrain: plante.terrain,
        vivace: plante.vivace,
      }).then(
        res => resolve(res),
        err => reject(err),
      )
      //firebase.storage().ref().child('Plantes/' + plante.nom + '.jpg')
    })
  }
  public deletePlante(plante: PlanteModele): void {
    this.angularFireDatabase.list('Plantes/').remove(plante.key).then(() => {
      if (plante.imageURL == "") {
      } else {
        if (plante.imageURL == this.imageVide) {
        } else {
          this.deleteImage(plante)
        }
      }
    }).catch(error => console.log(error));
  }
//   public numeroIndex(nomPlante: any) {
//     try {
//       return this.plantes2.findIndex(x => x.nom === nomPlante)
//     } catch (error) {
//       return -1
//     }
//   }
  public deleteImage(plante: PlanteModele): void {
    this.angularFireStorage.storage.refFromURL(plante.imageURL).delete();
    //this.angularFireStorage.ref("Plantes/test.jpg").delete();
  }

//   public async openLibrary() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE,
//       targetWidth: 1000,
//       targetHeight: 1000,
//       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
//     };
//     return await this.camera.getPicture(options);
//   }
//   public async openCamera() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE,
//       targetWidth: 1000,
//       targetHeight: 1000,
//       sourceType: this.camera.PictureSourceType.CAMERA
//     };
//     return await this.camera.getPicture(options);
//   }

//   public createCategoriePlante(CategoriePlante: PlanteModele) {
//     return new Promise<any>((resolve, reject) => {
//       this.angularFireDatabase.list('CategoriesPlantes/'+CategoriePlante.type).push(CategoriePlante.categorie)
//         .then(
//           res => resolve(res),
//           err => reject(err)
//         )
//     })
//   }
//   public getCategoriesPlantes(typePlante): Observable<Array<any>> {
//     return new Observable<Array<PlanteModele>>(observer => {
//     this.angularFireDatabase.list('CategoriesPlantes/'+typePlante).snapshotChanges(['child_added', 'child_removed', 'child_changed', 'child_moved']).subscribe(plantesRecus => {
//       let categoriesPlantes: Array<any> = new Array<any>();
//       plantesRecus.forEach(planteRecus => {
//         let categoriePlante: any = null;
//         categoriePlante = planteRecus.payload.val()
//         categoriesPlantes.push(categoriePlante);
//       })
//       observer.next(categoriesPlantes);
//     });
//   });
//   }
}