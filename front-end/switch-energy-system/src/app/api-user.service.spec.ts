import { TestBed } from '@angular/core/testing';

import { ApiUserService } from './admin/service/api-user.service';

describe('ApiUserService', () => {
  let service: ApiUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
