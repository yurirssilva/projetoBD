import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverChamadoPage } from './resolver-chamado.page';

describe('ResolverChamadoPage', () => {
  let component: ResolverChamadoPage;
  let fixture: ComponentFixture<ResolverChamadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverChamadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverChamadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
