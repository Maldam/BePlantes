import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GardeConnexionService } from './services/garde-connexion.service';
const routes: Routes = [
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: '',canActivate: [GardeConnexionService],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ajouter-plante',canActivate: [GardeConnexionService],
    loadChildren: () => import('./ajouter-plante/ajouter-plante.module').then( m => m.AjouterPlantePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}