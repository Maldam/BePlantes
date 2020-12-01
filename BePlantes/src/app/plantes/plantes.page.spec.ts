import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlantesPage as PlantesPage } from './plantes.page';

describe('PlantesPage', () => {
  let component: PlantesPage;
  let fixture: ComponentFixture<PlantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
