import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicoListaPage } from './medico-lista.page';

describe('MedicoListaPage', () => {
  let component: MedicoListaPage;
  let fixture: ComponentFixture<MedicoListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
