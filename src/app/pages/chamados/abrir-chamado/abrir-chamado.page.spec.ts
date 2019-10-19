import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirChamadoPage } from './abrir-chamado.page';

describe('AbrirChamadoPage', () => {
  let component: AbrirChamadoPage;
  let fixture: ComponentFixture<AbrirChamadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrirChamadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
