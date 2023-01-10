import { TestBed } from '@angular/core/testing';

import { GuardAuthenService } from './guard-authen.service';

describe('GuardAuthenService', () => {
  let service: GuardAuthenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardAuthenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
