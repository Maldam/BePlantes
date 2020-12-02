import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterPlantePageRoutingModule } from './ajouter-plante-routing.module';

import { AjouterPlantePage } from './ajouter-plante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPlantePageRoutingModule
  ],
  declarations: [AjouterPlantePage]
})
export class AjouterPlantePageModule {}
