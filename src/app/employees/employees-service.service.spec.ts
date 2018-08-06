import { TestBed, inject } from '@angular/core/testing';

import { EmployeesServiceService } from './employees-service.service';

describe('EmployeesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesServiceService]
    });
  });

  it('should be created', inject([EmployeesServiceService], (service: EmployeesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
