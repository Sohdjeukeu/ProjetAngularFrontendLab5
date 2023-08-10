import { TestBed } from '@angular/core/testing';

import { ClientsAffairesService } from './clients-affaires.service';

describe('ClientsAffairesService', () => {
  let service: ClientsAffairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsAffairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
