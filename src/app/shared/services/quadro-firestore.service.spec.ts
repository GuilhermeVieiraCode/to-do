import { TestBed } from '@angular/core/testing';

import { QuadroFirestoreService } from './quadro-firestore.service';

describe('QuadroFirestoreService', () => {
  let service: QuadroFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuadroFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
