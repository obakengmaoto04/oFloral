import { TestBed } from '@angular/core/testing';

import { OfloralServiceService } from './ofloral-service.service';

describe('OfloralServiceService', () => {
  let service: OfloralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfloralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
