import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantesPage } from './plantes.page';

const routes: Routes = [
  {
    path: '',
    component: PlantesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantesPageRoutingModule {}
