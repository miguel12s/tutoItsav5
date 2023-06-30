import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEstudianteComponent } from './modificar-estudiante.component';

describe('ModificarEstudianteComponent', () => {
  let component: ModificarEstudianteComponent;
  let fixture: ComponentFixture<ModificarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
