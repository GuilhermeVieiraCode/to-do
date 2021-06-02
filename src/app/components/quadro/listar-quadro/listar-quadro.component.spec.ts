import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuadroComponent } from './listar-quadro.component';

describe('ListarQuadroComponent', () => {
  let component: ListarQuadroComponent;
  let fixture: ComponentFixture<ListarQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
