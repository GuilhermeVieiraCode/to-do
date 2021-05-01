import { TestBed } from '@angular/core/testing';

import { TarefaFirestoreService } from './tarefa-firestore.service';

describe('TarefaFirestoreService', () => {
  let service: TarefaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
