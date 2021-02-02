import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirecionarConsultaPage } from './direcionar-consulta.page';

describe('DirecionarConsultaPage', () => {
  let component: DirecionarConsultaPage;
  let fixture: ComponentFixture<DirecionarConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirecionarConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirecionarConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
