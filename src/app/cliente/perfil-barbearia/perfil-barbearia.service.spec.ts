import { TestBed } from '@angular/core/testing';

import { PerfilBarbeariaService } from './perfil-barbearia.service';

describe('PerfilBarbeariaService', () => {
  let service: PerfilBarbeariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilBarbeariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
