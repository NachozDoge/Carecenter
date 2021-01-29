import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilVisualizarPage } from './perfil-visualizar.page';

describe('PerfilVisualizarPage', () => {
  let component: PerfilVisualizarPage;
  let fixture: ComponentFixture<PerfilVisualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilVisualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilVisualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
