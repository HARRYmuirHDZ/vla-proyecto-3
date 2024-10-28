import { TestBed } from '@angular/core/testing';

import { PaisService } from './pais.service';  // Asegúrate de que la ruta sea correcta


describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
