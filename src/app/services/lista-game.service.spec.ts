import { TestBed, inject } from '@angular/core/testing';

import { ListaGameService } from './lista-game.service';

describe('ListaGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaGameService]
    });
  });

  it('should be created', inject([ListaGameService], (service: ListaGameService) => {
    expect(service).toBeTruthy();
  }));
});
