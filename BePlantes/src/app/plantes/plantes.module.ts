import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlantesPage } from './plantes.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlantesPageRoutingModule } from './plantes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlantesPageRoutingModule
  ],
  declarations: [PlantesPage]
})
export class PlantesPageModule {}
