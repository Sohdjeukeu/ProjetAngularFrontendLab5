import { TestBed } from '@angular/core/testing';

import { ClientsResidentielsService } from './clients-residentiels.service';

describe('ClientsResidentielsService', () => {
  let service: ClientsResidentielsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsResidentielsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
