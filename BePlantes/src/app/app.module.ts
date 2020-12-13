import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionService } from './services/connexion.service';
import { PlantesService } from './services/plantes.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { GardeConnexionService } from './services/garde-connexion.service';
import { firebaseConfig } from './app.firebase.config';
import { Camera } from '@ionic-native/camera/ngx';

// var firebaseConfig = {
//   apiKey: "AIzaSyD7kDm6lgSMS07e3y4AMTBBmRXtw_KkWPQ",
//   authDomain: "beplantes.firebaseapp.com",
//   databaseURL: "https://beplantes-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "beplantes",
//   storageBucket: "beplantes.appspot.com",
//   messagingSenderId: "473724761524",
//   appId: "1:473724761524:web:b74a8997454c77eda76ee1",
//   measurementId: "G-SL6YPQCRE4"
// };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    ConnexionService,
    GardeConnexionService,
    PlantesService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
