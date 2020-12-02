import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPlantePage } from './ajouter-plante.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPlantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPlantePageRoutingModule {}
