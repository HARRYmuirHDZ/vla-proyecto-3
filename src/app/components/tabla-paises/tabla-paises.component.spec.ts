import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaisesComponent } from './tabla-paises.component';

describe('TablaPaisesComponent', () => {
  let component: TablaPaisesComponent;
  let fixture: ComponentFixture<TablaPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaPaisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
