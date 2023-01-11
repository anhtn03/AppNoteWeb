import { TestBed } from '@angular/core/testing';

import { InterceptorAuthorizeService } from './interceptor-authorize.service';

describe('InterceptorAuthorizeService', () => {
  let service: InterceptorAuthorizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorAuthorizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
