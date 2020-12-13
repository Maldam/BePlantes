import { Component } from '@angular/core';
import { PlanteModele } from '../modeles/plante.modele';


@Component({
  selector: 'app-plantes',
  templateUrl: 'plantes.page.html',
  styleUrls: ['plantes.page.scss']
})
export class PlantesPage {
  public listePlantes: Array<PlanteModele> = new Array<PlanteModele>();

  constructor() {}

}
