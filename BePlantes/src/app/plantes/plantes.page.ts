import { Component } from '@angular/core';
import { PlanteModele } from '../modeles/plante.modele';
import { PlantesService } from '../services/plantes.service';
@Component({
  selector: 'app-plantes',
  templateUrl: 'plantes.page.html',
  styleUrls: ['plantes.page.scss']
})
export class PlantesPage {
  //public plantes: Array<PlanteModele> = new Array<PlanteModele>();
  public listeGenres: any;
  constructor(
    public plantesService: PlantesService,
  ) {
    this.plantesService.getGenres().subscribe(genres => {
      //this.plantes = plantes;
      this.listeGenres = genres;
    });
  }
}