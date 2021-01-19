import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilsPage } from './perfils.page';

describe('PerfilsPage', () => {
  let component: PerfilsPage;
  let fixture: ComponentFixture<PerfilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
