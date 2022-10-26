import { TestBed } from '@angular/core/testing';

import { MssqlRegioService } from './mssql-regio.service';

describe('MssqlRegioService', () => {
  let service: MssqlRegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MssqlRegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
