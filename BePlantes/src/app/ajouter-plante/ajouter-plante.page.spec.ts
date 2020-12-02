import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterPlantePage } from './ajouter-plante.page';

describe('AjouterPlantePage', () => {
  let component: AjouterPlantePage;
  let fixture: ComponentFixture<AjouterPlantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPlantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterPlantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
